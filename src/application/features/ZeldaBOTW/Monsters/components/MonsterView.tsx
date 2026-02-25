import React, { useMemo } from "react";
import { useMonsterHook } from "./useMonsterHook";
import { MonsterUsecase } from "../MonsterUsecase";
import { MonsterService } from "../MonsterService";

import { MonsterRepository } from "../../../../infrastructure/features/ZeldaBOTW/Monsters/MonsterRepository";

const MonstersView: React.FC = () => {
  const monsterRepository = useMemo(() => new MonsterRepository(), []);
  const monsterService = useMemo(
    () => new MonsterService(monsterRepository),
    [monsterRepository],
  );
  const monsterUsecase = useMemo(
    () => new MonsterUsecase(monsterService),
    [monsterService],
  );

  const { monsters, error } = useMonsterHook(monsterUsecase);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (monsters.length === 0) {
    return <div>Cargando monstruos...</div>;
  }

  return (
    <div>
      <h1>Monstruos de Zelda BOTW</h1>
      <ul>
        {monsters.map((monster) => (
          <li key={monster.id}>{monster.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MonstersView;
