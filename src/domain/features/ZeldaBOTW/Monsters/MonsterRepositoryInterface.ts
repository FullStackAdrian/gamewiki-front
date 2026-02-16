import { BaseRepository } from "../../../abstractions/";
import type { MonsterModel } from "./MonsterModel";
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
import type { MonsterRepositoryInterface } from "./rules/interfaces/MonsterRepositoryInterface";

export class MonsterRepository extends BaseRepository<MonsterModel> implements MonsterRepositoryInterface {
  constructor(baseURL: string, token?: string | null) {
    super(baseURL, token);
  }

  async create<
    TRequest extends CreateMonsterRequestInterface,
    TResponse extends CreateMonsterResponseInterface,
  >(request: TRequest): Promise<TResponse> {
    return this.create(request);
  }

  async getById<
    TRequest extends GetMonsterByIdRequestInterface,
    TResponse extends GetMonsterByIdResponseInterface,
  >(request: TRequest): Promise<TResponse> {
    return this.getById(request);
  }

  async getAll<
    TRequest extends GetAllMonstersRequestInterface,
    TResponse extends GetAllMonstersResponseInterface,
  >(request: TRequest): Promise<TResponse> {
    return this.getAll(request);
  }

  async updateById<
    TRequest extends UpdateMonsterByIdRequestInterface,
    TResponse extends UpdateMonsterByIdResponseInterface,
  >(request: TRequest): Promise<TResponse> {
    return this.updateById(request);
  }

  async deleteById<
    TRequest extends DeleteMonsterByIdRequestInterface,
    TResponse extends DeleteMonsterByIdResponseInterface,
  >(request: TRequest): Promise<TResponse> {
    return this.deleteById(request);
  }
}