import React, { useMemo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MaterialRepository } from "../../../../../../infrastructure/features/ZeldaBOTW/Materials/MaterialRepository";
import { MaterialUsecase } from "../../MaterialUsecase";
import { MaterialService } from "../../MaterialService";
import useMaterialFormHook from "../../hooks/useMaterialFormHook";
import {
  materialCategories,
  materialSchema,
} from "../../schemas/MaterialSchema";
import { Loading } from "../../../../../shared/components/common/Loading";
import MaterialForm from "../ui/MaterialForm";
import type { Material } from "../../schemas/MaterialSchema";
import type { MaterialModelInterface } from "../../../../../../domain/features/ZeldaBOTW/Materials/MaterialModelInterface"; // Tipo para el modelo de dominio (arrays de strings)

interface MaterialFormContainerProps {
  materialId?: number;
  onSuccess?: () => void;
}

const MaterialFormContainer: React.FC<MaterialFormContainerProps> = ({
  materialId,
  onSuccess,
}) => {
  const materialRepository = useMemo(() => new MaterialRepository(), []);

  const materialService = useMemo(
    () => new MaterialService(materialRepository),
    [materialRepository],
  );

  const materialUsecase = useMemo(
    () => new MaterialUsecase(materialService),
    [materialService],
  );

  const {
    isLoading,
    isSubmitting,
    initialData,
    error,
    handleCreateSubmitForm,
    handleUpdateSubmitForm,
  } = useMaterialFormHook({
    usecase: materialUsecase,
    materialId,
  });

  const form = useForm<Material>({
    resolver: zodResolver(materialSchema),
    defaultValues: {
      id_num: 0,
      name: "",
      category: "",
      common_locations: "",
      cooking_effect: "",
      hearts_recovered: 0,
      description: "",
      image: "",
    },
  });

  useEffect(() => {
    const fetchNextId = async () => {
      if (!materialId && !initialData?.id_num) {
        const nextId = await materialUsecase.getNextMaterialId();
        form.setValue("id_num", nextId);
      }
    };
    fetchNextId();
  }, [materialId, materialUsecase, form, initialData]);

  useEffect(() => {
    if (initialData) {
      form.reset({
        id_num: initialData.id_num,
        name: initialData.name,
        category:
          initialData.category &&
          materialCategories.includes(initialData.category as any)
            ? initialData.category
            : "",
        cooking_effect: initialData.cooking_effect,
        hearts_recovered: initialData.hearts_recovered,
        description: initialData.description,
        image: initialData.image ?? "",
        common_locations: initialData.common_locations?.join("\n") ?? "",
      });
    }
  }, [initialData, form]);

  const onSubmit = form.handleSubmit(async (data) => {
    const transformedData: MaterialModelInterface = {
      id_num: Number(data.id_num),
      name: data.name,
      category: data.category,
      cooking_effect: data.cooking_effect,
      hearts_recovered: Number(data.hearts_recovered),
      description: data.description,
      image: data.image || "",
      common_locations: data.common_locations
        .split("\n")
        .map((s) => s.trim())
        .filter((s) => s.length > 0),
    };

    const success =
      typeof materialId === "number"
        ? await handleUpdateSubmitForm(transformedData)
        : await handleCreateSubmitForm(transformedData);

    if (success && onSuccess) {
      onSuccess();
    }
  });

  if (isLoading) {
    return (
      <Loading
        message={
          materialId ? "Cargando material..." : "Preparando formulario..."
        }
      />
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-6 text-lg">Error: {error}</div>
    );
  }

  return (
    <div>
      <MaterialForm
        register={form.register}
        errors={form.formState.errors}
        onSubmit={onSubmit}
      />

      {isSubmitting && (
        <div className="mt-6 text-center text-slate-400 animate-pulse">
          Guardando material...
        </div>
      )}
    </div>
  );
};

export default MaterialFormContainer;
