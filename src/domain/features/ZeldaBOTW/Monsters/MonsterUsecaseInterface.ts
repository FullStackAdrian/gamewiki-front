import type { MonsterModel } from "./MonsterModel";

export interface MonsterUsecaseInterface {
  createMonster(entity: MonsterModel): Promise<MonsterModel>;
  getMonsterById(id: string): Promise<MonsterModel>;
  getAllMonsters(): Promise<MonsterModel[]>;
  updateMonster(entity: MonsterModel): Promise<MonsterModel>;
  deleteMonster(id: string): Promise<void>;
}
