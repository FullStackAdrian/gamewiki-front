import { BaseService } from "../../../base/urm/BaseService";
import type { MonsterModel } from "../../../../domain/features/ZeldaBOTW/Monsters/model/MonsterModel";
import type { MonsterRepository } from "./MonsterRepository";

export class MonsterService extends BaseService<
  MonsterModel,
  MonsterRepository,
  MonsterMapper
> {
  constructor(repository: MonsterRepository, mapper: MonsterMapper) {
    super(repository, mapper);
  }
}
