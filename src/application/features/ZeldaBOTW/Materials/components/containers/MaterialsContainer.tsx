import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { MaterialRepository } from "../../../../../../infrastructure/features/ZeldaBOTW/Materials/MaterialRepository";
import type { MaterialModelInterface } from "../../../../../../domain/features/ZeldaBOTW/Materials/MaterialModelInterface";
import { MaterialUsecase } from "../../MaterialUsecase";
import { MaterialService } from "../../MaterialService";
import useMaterialsHook from "../../hooks/useMaterialsHook";
// ui components
import { Loading } from "../../../../../shared/components/common/Loading";
import { MaterialCard } from "../ui/MaterialCard";


const MaterialsContainer: React.FC = () => {
  const materialRepository = useMemo(() => new MaterialRepository(), []);
  const materialService = useMemo(
    () => new MaterialService(materialRepository),
    [materialRepository],
  );
  const materialUsecase = useMemo(
    () => new MaterialUsecase(materialService),
    [materialService], 
  );

  const navigate = useNavigate();

  const { materials, deleteMaterial, isLoading, error, } = useMaterialsHook(materialUsecase);

  const handleSelectMaterial = (material: MaterialModelInterface) => {
    navigate("/zelda/material", { state: { material } });
  };


  if (isLoading) {
    return <Loading message="Cargando monstruos..." />;
  }

  if (error) {
    return <div className="text-red-500 text-center p-4">Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {materials.map((material) => (
        <MaterialCard 
          key={material.id_num} 
          material={material}
          onClick={() => handleSelectMaterial(material)}
          onClickDelete={ async () =>  await deleteMaterial(material.id_num)}
        />
      ))}
    </div>
  );
};

export default MaterialsContainer;