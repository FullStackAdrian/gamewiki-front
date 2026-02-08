import type { BaseRequestInterface } from "../interfaces/dto/BaseRequestInterface";
import type { BaseEntityInterface } from "../interfaces/urm/BaseEntityInterface";
import type { BaseServiceInterface } from "../interfaces/urm/BaseServiceInterface";
import type { BaseRepository } from "./BaseRepository";
import type { BaseMapper } from "./BaseMapper";

export class BaseService<
  TEnt extends BaseEntityInterface,
  TRequest extends BaseRequestInterface,
> implements BaseServiceInterface<TEnt> {
  constructor(
    repository: BaseRepository<TRequest, TEnt>,
    mapper: BaseMapper<TEnt, TRequest>,
  ) {
    this.repository = repository;
    this.mapper = mapper;
  }
  protected repository: BaseRepository<TRequest, TEnt>;
  protected mapper: BaseMapper<TEnt, TRequest>; 

  async create(entity: TEnt): Promise<TEnt> {
    const request = await this.mapper.entToRequest(entity);
    const response = await this.repository.create(request);
    return this.mapper.responseToEnt(response);
  }

  async getById(id: string): Promise<TEnt> {
    const request = {
      uri: `/${id}`,
    } as TRequest;

    const response = await this.repository.getById(request);
    return this.mapper.responseToEnt(response);
  }

  async getAll(): Promise<TEnt[]> {
    const request = {
      uri: "/",
    } as TRequest;

    const response = await this.repository.getAll(request);
    return this.mapper.responseArrayToEntArray(response);
  }

  async updateById(id: string, entity: TEnt): Promise<TEnt> {
    const request = await this.mapper.entToRequest(entity);
    request.uri = `/${id}`;

    const response = await this.repository.updateById(request);
    return this.mapper.responseToEnt(response);
  }

  async deleteById(id: string): Promise<void> {
    const request = {
      uri: `/${id}`,
    } as TRequest;

    await this.repository.deleteById(request);
  }
}
