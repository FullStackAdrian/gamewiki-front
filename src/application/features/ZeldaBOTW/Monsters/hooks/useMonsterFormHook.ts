import { useState, useEffect, useCallback } from "react";
import type { MonsterUsecaseInterface } from "../../../../../domain/features/ZeldaBOTW/Monsters/MonsterUsecaseInterface";
import type { MonsterModelInterface } from "../../../../../domain/features/ZeldaBOTW/Monsters/MonsterModelInterface";
// maybe i need monster schema in some future
// import type { Monster } from "../schemas/MonsterSchema";

interface UseMonsterFormHookProps {
  usecase: MonsterUsecaseInterface;
  monsterId?: number;
}

interface UseMonsterFormHookReturn {
  isLoading: boolean;
  isSubmitting: boolean;
  initialData: Partial<MonsterModelInterface> | null;
  error: string | null;
  handleCreateSubmitForm: (data: MonsterModelInterface) => Promise<boolean>;
  handleUpdateSubmitForm: (data: MonsterModelInterface) => Promise<boolean>;
}

export function useMonsterFormHook({
  usecase,
  monsterId,
}: UseMonsterFormHookProps): UseMonsterFormHookReturn {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [initialData, setInitialData] =
    useState<Partial<MonsterModelInterface> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!monsterId) return;

    let isMounted = true;

    const loadMonster = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const monster = await usecase.getMonsterById(monsterId.toString());
        if (isMounted) {
          setInitialData(monster);
        }
      } catch (err) {
        console.error("Error cargando monstruo:", err);
        if (isMounted) {
          setError("No se pudo cargar el monstruo. Inténtalo de nuevo.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadMonster();

    return () => {
      isMounted = false;
    };
  }, [usecase, monsterId]);

  const handleCreateSubmitForm = useCallback(
    async (data: MonsterModelInterface): Promise<boolean> => {
      setIsSubmitting(true);
      setError(null);

      try {
        await usecase.createMonster(data);

        return true;
      } catch (err) {
        console.error("Error al guardar monstruo:", err);
        setError(
          "No se pudo guardar el monstruo. Revisa los datos e inténtalo de nuevo.",
        );
        return false;
      } finally {
        setIsSubmitting(false);
      }
    },
    [usecase, monsterId],
  );

  const handleUpdateSubmitForm = useCallback(
    async (data: MonsterModelInterface): Promise<boolean> => {
      setIsSubmitting(true);
      setError(null);

      try {
        if (typeof monsterId === "number" && monsterId > 0) {
          await usecase.updateMonster(data);
        } else {
          throw new Error("Error handling form submit must need monster id");
        }
        return true;
      } catch (err) {
        console.error("Error al guardar monstruo:", err);
        setError(
          "No se pudo guardar el monstruo. Revisa los datos e inténtalo de nuevo.",
        );
        return false;
      } finally {
        setIsSubmitting(false);
      }
    },
    [usecase, monsterId],
  );

  return {
    isLoading,
    isSubmitting,
    initialData,
    error,
    handleCreateSubmitForm,
    handleUpdateSubmitForm,
  };
}

export default useMonsterFormHook;
