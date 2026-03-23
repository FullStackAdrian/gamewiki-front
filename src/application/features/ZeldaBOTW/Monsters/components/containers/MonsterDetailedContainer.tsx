import React from "react";
import { DetailCard } from "../../../../../shared/components/ui/cards/DetailedCard";
import GoBackButton from "../../../../../shared/components/ui/GoBackButton";
import type { MonsterModelInterface } from "../../../../../../domain/features/ZeldaBOTW/Monsters/MonsterModelInterface";

interface MonsterDetailedContainerProps {
  monster: MonsterModelInterface | undefined;
}

const MonsterDetailedContainer: React.FC<MonsterDetailedContainerProps> = ({
  monster,
}) => {

  if (monster === undefined) {
    return (
      <div className="text-center p-8">
        <p className="text-gray-600">Monstruo no encontrado</p>
        <GoBackButton route="/"></GoBackButton>
      </div>
    );
  }

  return (
    <div className="m-4">
      <GoBackButton route="/"></GoBackButton>
      <DetailCard
        image={monster.image}
        imageAlt={monster.name}
        title={monster.name}
        category={monster.category}
        description={monster.description}
        children={undefined}
      ></DetailCard>
    </div>
  );
};

export default MonsterDetailedContainer;
