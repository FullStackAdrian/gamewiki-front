import { BaseRepository } from "../../../base/urm/BaseRepository";
// dtos
import type { MonsterModel } from "../../../../domain/features/ZeldaBOTW/Monsters/model/MonsterModel";
import type { CreateMonsterRequestInterface } from "../../../../domain/features/ZeldaBOTW/Monsters/dto/requests/CreateMonsterRequestInterface";
import type { CreateMonsterResponseInterface } from "../../../../domain/features/ZeldaBOTW/Monsters/dto/responses/CreateMonsterResponseInterface";
import type { GetMonsterByIdRequestInterface } from "../../../../domain/features/ZeldaBOTW/Monsters/dto/requests/GetMonsterByIdRequestInterface";
import type { GetMonsterByIdResponseInterface } from "../../../../domain/features/ZeldaBOTW/Monsters/dto/responses/GetMonsterByIdResponseInterface";
import type { GetAllMonstersRequestInterface } from "../../../../domain/features/ZeldaBOTW/Monsters/dto/requests/GetAllMonstersRequestInterface";
import type { GetAllMonstersResponseInterface } from "../../../../domain/features/ZeldaBOTW/Monsters/dto/responses/GetAllMonstersResponseInterface";
import type { UpdateMonsterByIdRequestInterface } from "../../../../domain/features/ZeldaBOTW/Monsters/dto/requests/UpdateMonsterByIdRequestInterface";
import type { UpdateMonsterByIdResponseInterface } from "../../../../domain/features/ZeldaBOTW/Monsters/dto/responses/UpdateMonsterByIdResponseInterface";
import type { DeleteMonsterByIdRequestInterface } from "../../../../domain/features/ZeldaBOTW/Monsters/dto/requests/DeleteMonsterByIdRequestInterface";
import type { DeleteMonsterByIdResponseInterface } from "../../../../domain/features/ZeldaBOTW/Monsters/dto/responses/DeleteMonsterByIdResponseInterface";

export class MonsterRepository extends BaseRepository<MonsterModel> {
  constructor(baseURL: string, token?: string | null) {
    super(baseURL, token);
  }

  async createMonster(request: CreateMonsterRequestInterface) {
    return this.create<
      CreateMonsterRequestInterface,
      CreateMonsterResponseInterface
    >(request);
  }

  async getMonster(request: GetMonsterByIdRequestInterface) {
    return this.getById<
      GetMonsterByIdRequestInterface,
      GetMonsterByIdResponseInterface
    >(request);
  }

  async getAllMonsters(request: GetAllMonstersRequestInterface) {
    return this.getAll<
      GetAllMonstersRequestInterface,
      GetAllMonstersResponseInterface
    >(request);
  }

  async updateMonster(request: UpdateMonsterByIdRequestInterface) {
    return this.updateById<
      UpdateMonsterByIdRequestInterface,
      UpdateMonsterByIdResponseInterface
    >(request);
  }

  async deleteMonster(request: DeleteMonsterByIdRequestInterface) {
    return this.deleteById<
      DeleteMonsterByIdRequestInterface,
      DeleteMonsterByIdResponseInterface
    >(request);
  }
}
