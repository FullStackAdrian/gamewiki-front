import React, { useMemo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Infraestructura y dominio
import { MonsterRepository } from "../../../../../../infrastructure/features/ZeldaBOTW/Monsters/MonsterRepository";
import { MonsterUsecase } from "../../MonsterUsecase";
import { MonsterService } from "../../MonsterService";

// Hook personalizado (asumimos que lo tienes o lo crearás)
import useMonsterFormHook from "../../hooks/useMonsterFormHook";

// Schema Zod (el que hemos estado trabajando)
import { monsterSchema } from "../../schemas/monster";

// UI components
import { Loading } from "../../../../../shared/components/common/Loading";
import MonsterForm from "../ui/MonsterForm"; // el formulario puro que hicimos antes

// Tipos
import type { Monster } from "../../schemas/MonsterSchema";

interface MonsterFormContainerProps {
  monsterId?: number; // opcional → si existe → modo edición
  onSuccess?: () => void; // callback para cerrar modal, redirigir, etc.
  onCancel?: () => void;
}

const MonsterFormContainer: React.FC<MonsterFormContainerProps> = ({
  monsterId,
  onSuccess,
  onCancel,
}) => {
  // Instancias memoizadas (igual que en MonstersContainer)
  const monsterRepository = useMemo(() => new MonsterRepository(), []);
  const monsterService = useMemo(
    () => new MonsterService(monsterRepository),
    [monsterRepository],
  );
  const monsterUsecase = useMemo(
    () => new MonsterUsecase(monsterService),
    [monsterService],
  );

  // Hook que maneja la lógica del formulario (carga datos si es edición, submit, etc.)
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
    values: initialData, // si viene de edición, se carga aquí
  });

  // Si hay datos iniciales (edición), reseteamos el form
  useEffect(() => {
    if (initialData) {
      form.reset({
        ...initialData,
        // Convertimos arrays a strings con saltos de línea
        common_locations: initialData.common_locations?.join("\n") || "",
        drops: initialData.drops?.join("\n") || "",
      });
    }
  }, [initialData, form]);

  const onSubmit = form.handleSubmit(async (data) => {
    const payload = {
      ...data,
      id_num: Number(data.id_num),
      common_locations: data.common_locations
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
      drops: data.drops
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
    };

    const success = await handleSubmitForm(payload);
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
      <h2 className="text-2xl font-bold text-slate-100 mb-6">
        {monsterId ? "Editar Monstruo" : "Crear Nuevo Monstruo"}
      </h2>

      <MonsterForm
        register={form.register}
        errors={form.formState.errors}
        onSubmit={onSubmit}
      />

      {isSubmitting && (
        <div className="mt-4 text-center text-slate-400">Guardando...</div>
      )}
    </div>
  );
};

export default MonsterFormContainer;
