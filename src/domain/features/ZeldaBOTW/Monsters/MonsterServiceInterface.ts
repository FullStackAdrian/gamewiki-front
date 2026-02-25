import type { BaseServiceInterface } from "./../../../abstractions/base/BaseServiceInterface";
import type { MonsterModelInterface } from "./MonsterModelInterface";

export interface MonsterServiceInterface extends BaseServiceInterface<MonsterModelInterface> {
  createMonster(entity: MonsterModelInterface): Promise<MonsterModelInterface>;
  getMonsterById(id: string): Promise<MonsterModelInterface>;
  getAllMonsters(): Promise<MonsterModelInterface[]>;
  updateMonster(entity: MonsterModelInterface): Promise<MonsterModelInterface>;
  deleteMonster(id: string): Promise<void>;
}
