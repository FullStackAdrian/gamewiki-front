import React from "react";
import { DetailCard } from "../../../../../shared/components/ui/cards/DetailedCard";
import GoBackButton from "../../../../../shared/components/ui/GoBackButton";
import type { MaterialModelInterface } from "../../../../../../domain/features/ZeldaBOTW/Materials/MaterialModelInterface";

interface MaterialDetailedContainerProps {
  material: MaterialModelInterface | undefined;
}

const MaterialDetailedContainer: React.FC<MaterialDetailedContainerProps> = ({
  material,
}) => {

  if (material === undefined) {
    return (
      <div className="text-center p-8">
        <p className="text-gray-600">Monstruo no encontrado</p>
        <GoBackButton route="/zelda/materials"></GoBackButton>
      </div>
    );
  }

  return (
    <div className="m-4">
      <GoBackButton route="/zelda/materials"></GoBackButton>
      <DetailCard
        image={material.image}
        imageAlt={material.name}
        title={material.name}
        category={material.category}
        description={material.description}
        children={undefined}
      ></DetailCard>
    </div>
  );
};

export default MaterialDetailedContainer;
