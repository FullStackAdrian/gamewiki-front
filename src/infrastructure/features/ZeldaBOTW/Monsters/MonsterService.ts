import { BaseService } from "../../../base/BaseService";
import type { MonsterModel } from "../../../../domain/features/ZeldaBOTW/Monsters/MonsterModel";
import type { MonsterRepository } from "./MonsterRepository";

export class MonsterService extends BaseService<
  MonsterModel,
  MonsterRepositoryInterface
> {
  constructor(repository: MonsterRepositoryInterface) {
    super(repository);
  }

  async createMonster(entity: MonsterModel): Promise<MonsterModel> {
    const mapper = new CreateMonsterMapper(); 
    return super.create(entity, mapper);
  }

  async getMonsterById(id: string): Promise<MonsterModel> {
    const mapper = new GetMonsterMapper(); 
    return super.getById(id, mapper);
  }

  async getAllMonsters(): Promise<MonsterModel[]> {
    const mapper = new GetAllMonsterser(); 
    return super.getAll(mapper);
  }

  async updateMonster(entity: MonsterModel): Promise<MonsterModel> {
    const mapper = new UpdateMonsterMapper(); 
    return super.updateById(entity, mapper);
  }

  async deleteMonster(id: string): Promise<void> {
    const mapper = new DeleteMonsterMapper(); 
    return super.deleteById(id, mapper);
  }
}
