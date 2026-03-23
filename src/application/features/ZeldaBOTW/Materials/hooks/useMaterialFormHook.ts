import { useState, useEffect, useCallback } from "react";
import type { MaterialUsecaseInterface } from "../../../../../domain/features/ZeldaBOTW/Materials/MaterialUsecaseInterface";
import type { MaterialModelInterface } from "../../../../../domain/features/ZeldaBOTW/Materials/MaterialModelInterface";
// maybe i need material schema in some future
// import type { Material } from "../schemas/MaterialSchema";

interface UseMaterialFormHookProps {
  usecase: MaterialUsecaseInterface;
  materialId?: number;
}

interface UseMaterialFormHookReturn {
  isLoading: boolean;
  isSubmitting: boolean;
  initialData: Partial<MaterialModelInterface> | null;
  error: string | null;
  handleCreateSubmitForm: (data: MaterialModelInterface) => Promise<boolean>;
  handleUpdateSubmitForm: (data: MaterialModelInterface) => Promise<boolean>;
}

export function useMaterialFormHook({
  usecase,
  materialId,
}: UseMaterialFormHookProps): UseMaterialFormHookReturn {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [initialData, setInitialData] =
    useState<Partial<MaterialModelInterface> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!materialId) return;

    let isMounted = true;

    const loadMaterial = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const material = await usecase.getMaterialById(materialId.toString());
        if (isMounted) {
          setInitialData(material);
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

    loadMaterial();

    return () => {
      isMounted = false;
    };
  }, [usecase, materialId]);

  const handleCreateSubmitForm = useCallback(
    async (data: MaterialModelInterface): Promise<boolean> => {
      setIsSubmitting(true);
      setError(null);

      try {
        await usecase.createMaterial(data);

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
    [usecase, materialId],
  );

  const handleUpdateSubmitForm = useCallback(
    async (data: MaterialModelInterface): Promise<boolean> => {
      setIsSubmitting(true);
      setError(null);

      try {
        if (typeof materialId === "number" && materialId > 0) {
          await usecase.updateMaterial(data);
        } else {
          throw new Error("Error handling form submit must need material id");
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
    [usecase, materialId],
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

export default useMaterialFormHook;
