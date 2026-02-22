import type { BaseServiceInterface } from "./../../../abstractions/base/BaseServiceInterface";
import type { MonsterModel } from "./MonsterModel";

export interface MonsterServiceInterface extends BaseServiceInterface<MonsterModel> {
  createMonster(entity: MonsterModel): Promise<MonsterModel>;
  getMonsterById(id: string): Promise<MonsterModel>;
  getAllMonsters(): Promise<MonsterModel[]>;
  updateMonster(entity: MonsterModel): Promise<MonsterModel>;
  deleteMonster(id: string): Promise<void>;
}
