import { useEffect, useState } from "react";
import useLoading from "../../../../shared/hooks/useLoading";
import type { MonsterUsecaseInterface } from "../../../../../domain/features/ZeldaBOTW/Monsters/MonsterUsecaseInterface";
import type { MonsterModelInterface } from "../../../../../domain/features/ZeldaBOTW/Monsters/MonsterModelInterface";

const useMonstersHook = (monsterUsecase: MonsterUsecaseInterface) => {
  const [monsters, setMonsters] = useState<MonsterModelInterface[]>([]);
  const [error, setError] = useState<string | null>(null);
  const { isLoading, startLoading, stopLoading } = useLoading();

  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        startLoading();
        const result = await monsterUsecase.getAllMonsters();
        setMonsters(result);
        stopLoading();
      } catch (err) {
        stopLoading();
        setError((err as Error).message);
      }
    };

    fetchMonsters();
  }, [monsterUsecase]);

  return { monsters, isLoading, error };
};

export default useMonstersHook;
