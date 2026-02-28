import type { MonsterModelInterface } from "./MonsterModelInterface";

export interface MonsterUsecaseInterface {
  createMonster(entity: MonsterModelInterface): Promise<MonsterModelInterface>;
  getMonsterById(id: string): Promise<MonsterModelInterface>;
  getAllMonsters(): Promise<MonsterModelInterface[]>;
  updateMonster(entity: MonsterModelInterface): Promise<MonsterModelInterface>;
  deleteMonster(id: string): Promise<void>;
}
