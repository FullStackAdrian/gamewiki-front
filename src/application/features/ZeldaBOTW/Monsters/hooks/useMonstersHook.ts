import { useEffect, useState } from "react";
import useLoading from "../../../../shared/hooks/useLoading";
import { useNavigate } from "react-router-dom";
//types
import type { MonsterUsecaseInterface } from "../../../../../domain/features/ZeldaBOTW/Monsters/MonsterUsecaseInterface";
import type { MonsterModelInterface } from "../../../../../domain/features/ZeldaBOTW/Monsters/MonsterModelInterface";

const useMonstersHook = (monsterUsecase: MonsterUsecaseInterface) => {
  const navigate = useNavigate();
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

  const handleSelectMonster = (monster: MonsterModelInterface) => {
    navigate("/monster", { state: { monster } });
  };

  return { monsters, isLoading, error, handleSelectMonster };
};

export default useMonstersHook;
