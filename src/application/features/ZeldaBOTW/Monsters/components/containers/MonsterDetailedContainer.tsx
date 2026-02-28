import React from "react";
import { DetailCard } from "../../../../../shared/components/ui/cards/DetailedCard";
import GoBackButton from "../../../../../shared/components/ui/GoBackButton";
import type { MonsterModelInterface } from "../../../../../../domain/features/ZeldaBOTW/Monsters/MonsterModelInterface";
import { useNavigate } from "react-router-dom";

interface MonsterDetailedContainerProps {
  monster: MonsterModelInterface | undefined;
}

const MonsterDetailedContainer: React.FC<MonsterDetailedContainerProps> = ({
  monster,
}) => {
  const navigate = useNavigate();


  if (monster === undefined) {
    return (
      <div className="text-center p-8">
        <p className="text-gray-600">Monstruo no encontrado</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Volver
        </button>
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
