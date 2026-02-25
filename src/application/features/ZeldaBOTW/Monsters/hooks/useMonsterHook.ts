import { useEffect, useState } from "react";
import type { MonsterUsecaseInterface } from "../../../../../domain/features/ZeldaBOTW/Monsters/MonsterUsecaseInterface";
import type { MonsterModelInterface } from "../../../../../domain/features/ZeldaBOTW/Monsters/MonsterModelInterface";

const useMonsterHook = (monsterUsecase: MonsterUsecaseInterface) => {
  const [monsters, setMonsters] = useState<MonsterModelInterface[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const result = await monsterUsecase.getAllMonsters();
        setMonsters(result);
      } catch (err) {
        setError((err as Error).message);
      }
    };

    fetchMonsters();
  }, [monsterUsecase]);

  return { monsters, error };
};

export default useMonsterHook;