import { BaseService } from "../../../shared/base/BaseService";
import type { MonsterModelInterface } from "../../../../domain/features/ZeldaBOTW/Monsters/MonsterModelInterface";
import type { MonsterRepositoryInterface } from "../../../../domain/features/ZeldaBOTW/Monsters/MonsterRepositoryInterface";
import type { MonsterServiceInterface } from "../../../../domain/features/ZeldaBOTW/Monsters/MonsterServiceInterface";
// mappers
import { CreateMonsterMapper } from "../../../../infrastructure/features/ZeldaBOTW/Monsters/rules/mappers/CreateMonsterMapper";
import { GetMonsterMapper } from "../../../../infrastructure/features/ZeldaBOTW/Monsters/rules/mappers/GetMonsterMapper";
import { GetAllMonsterser } from "../../../../infrastructure/features/ZeldaBOTW/Monsters/rules/mappers/GetAllMonstersMapper";
import { UpdateMonsterMapper } from "../../../../infrastructure/features/ZeldaBOTW/Monsters/rules/mappers/UpdateMonsterMapper";
import { DeleteMonsterMapper } from "../../../../infrastructure/features/ZeldaBOTW/Monsters/rules/mappers/DeleteMonsterMapper";

export class MonsterService
  extends BaseService<MonsterModelInterface, MonsterRepositoryInterface>
  implements MonsterServiceInterface
{
  constructor(repository: MonsterRepositoryInterface) {
    super(repository);
  }

  async createMonster(
    entity: MonsterModelInterface,
  ): Promise<MonsterModelInterface> {
    const mapper = new CreateMonsterMapper();
    return super.create(entity, mapper);
  }

  async getMonsterById(id: string): Promise<MonsterModelInterface> {
    const mapper = new GetMonsterMapper();
    return super.getById(id, mapper);
  }

  async getAllMonsters(): Promise<MonsterModelInterface[]> {
    const mapper = new GetAllMonsterser();
    return super.getAll(mapper);
  }

  async updateMonster(
    entity: MonsterModelInterface,
  ): Promise<MonsterModelInterface> {
    const mapper = new UpdateMonsterMapper();
    return super.updateById(entity, mapper);
  }

  async deleteMonster(id: string): Promise<void> {
    const mapper = new DeleteMonsterMapper();
    return super.deleteById(id, mapper);
  }
}
