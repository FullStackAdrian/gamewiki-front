import { useEffect, useState } from "react";
import useLoading from "../../../../shared/hooks/useLoading";
//types
import type { MaterialUsecaseInterface } from "../../../../../domain/features/ZeldaBOTW/Materials/MaterialUsecaseInterface";
import type { MaterialModelInterface } from "../../../../../domain/features/ZeldaBOTW/Materials/MaterialModelInterface";

const useMaterialsHook = (materialUsecase: MaterialUsecaseInterface) => {
  const [materials, setMaterials] = useState<MaterialModelInterface[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { isLoading, startLoading, stopLoading } = useLoading();

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        startLoading();
        const result = await materialUsecase.getAllMaterials();
        setMaterials(result);
        stopLoading();
      } catch (err) {
        stopLoading();
        setError((err as Error).message);
      }
    };

    fetchMaterials();
  }, [materialUsecase]);


  const deleteMaterial = async (id: number) => {
    try {
      startLoading();
      await materialUsecase.deleteMaterial(id.toString());
      setMaterials(materials.filter((material) => material.id_num !== id));
      stopLoading();
    } catch (err) {
      stopLoading();
      setError((err as Error).message);
    }
  };

  return { materials, isLoading, error, deleteMaterial };
};

export default useMaterialsHook;

