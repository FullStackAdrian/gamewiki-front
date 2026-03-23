import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { MonsterRepository } from "../../../../../../infrastructure/features/ZeldaBOTW/Monsters/MonsterRepository";
import type { MonsterModelInterface } from "../../../../../../domain/features/ZeldaBOTW/Monsters/MonsterModelInterface";
import { MonsterUsecase } from "../../MonsterUsecase";
import { MonsterService } from "../../MonsterService";
import useMonstersHook from "../../hooks/useMonstersHook";
// ui components
import { Loading } from "../../../../../shared/components/common/Loading";
import { MonsterCard } from "../ui/MonsterCard";


const MonstersContainer: React.FC = () => {
  const monsterRepository = useMemo(() => new MonsterRepository(), []);
  const monsterService = useMemo(
    () => new MonsterService(monsterRepository),
    [monsterRepository],
  );
  const monsterUsecase = useMemo(
    () => new MonsterUsecase(monsterService),
    [monsterService], 
  );

  const navigate = useNavigate();

  const { monsters, deleteMonster, isLoading, error, } = useMonstersHook(monsterUsecase);

  const handleSelectMonster = (monster: MonsterModelInterface) => {
    navigate("/zelda/monster", { state: { monster } });
  };


  if (isLoading) {
    return <Loading message="Cargando monstruos..." />;
  }

  if (error) {
    return <div className="text-red-500 text-center p-4">Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {monsters.map((monster) => (
        <MonsterCard 
          key={monster.id_num} 
          monster={monster}
          onClick={() => handleSelectMonster(monster)}
          onClickDelete={ async () =>  await deleteMonster(monster.id_num)}
        />
      ))}
    </div>
  );
};

export default MonstersContainer;