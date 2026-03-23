import React, { useMemo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MonsterRepository } from "../../../../../../infrastructure/features/ZeldaBOTW/Monsters/MonsterRepository";
import { MonsterUsecase } from "../../MonsterUsecase";
import { MonsterService } from "../../MonsterService";
import useMonsterFormHook from "../../hooks/useMonsterFormHook";
import { monsterSchema } from "../../schemas/MonsterSchema";
import { Loading } from "../../../../../shared/components/common/Loading";
import MonsterForm from "../ui/MonsterForm";
import type { Monster } from "../../schemas/MonsterSchema";
import type { MonsterModelInterface } from "../../../../../../domain/features/ZeldaBOTW/Monsters/MonsterModelInterface"; // Tipo para el modelo de dominio (arrays de strings)
import GoBackButton from "../../../../../shared/components/ui/GoBackButton";

interface MonsterFormContainerProps {
  monsterId?: number;
  onSuccess?: () => void;
}

const MonsterFormContainer: React.FC<MonsterFormContainerProps> = ({
  monsterId,
  onSuccess,
}) => {
  const monsterRepository = useMemo(() => new MonsterRepository(), []);

  const monsterService = useMemo(
    () => new MonsterService(monsterRepository),
    [monsterRepository],
  );

  const monsterUsecase = useMemo(
    () => new MonsterUsecase(monsterService),
    [monsterService],
  );

  const { isLoading, isSubmitting, initialData, error, handleSubmitForm } =
    useMonsterFormHook({
      usecase: monsterUsecase,
      monsterId,
    });

  const form = useForm<Monster>({
    resolver: zodResolver(monsterSchema),
    defaultValues: {
      id_num: 0,
      name: "",
      category: "",
      common_locations: "",
      description: "",
      drops: "",
      image: "",
    },
  });

  useEffect(() => {
    if (initialData) {
      form.reset({
        id_num: initialData.id_num,
        name: initialData.name,
        category: initialData.category,
        description: initialData.description,
        image: initialData.image ?? "",
        common_locations: initialData.common_locations?.join("\n") ?? "",
        drops: initialData.drops?.join("\n") ?? "",
      });
    }
  }, [initialData, form]);

  const onSubmit = form.handleSubmit(async (data) => {
    const transformedData: MonsterModelInterface = {
      id_num: Number(data.id_num),
      name: data.name,
      category: data.category,
      description: data.description,
      image: data.image || "",

      common_locations: data.common_locations
        .split("\n")
        .map((s) => s.trim())
        .filter((s) => s.length > 0),
      drops: data.drops
        .split("\n")
        .map((s) => s.trim())
        .filter((s) => s.length > 0),
    };

    const success = await handleSubmitForm(transformedData);
    if (success && onSuccess) {
      onSuccess();
    }
  });

  if (isLoading) {
    return (
      <Loading
        message={
          monsterId ? "Cargando monstruo..." : "Preparando formulario..."
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
    <div className="max-w-2xl mx-auto p-6 bg-slate-800 rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-100">
          {monsterId ? "Editar Monstruo" : "Crear Nuevo Monstruo"}
        </h2>
        <GoBackButton route='/zelda/monsters' ></GoBackButton>
      </div>

      <MonsterForm
        register={form.register}
        errors={form.formState.errors}
        onSubmit={onSubmit}
      />

      {isSubmitting && (
        <div className="mt-6 text-center text-slate-400 animate-pulse">
          Guardando monstruo...
        </div>
      )}
    </div>
  );
};

export default MonsterFormContainer;
