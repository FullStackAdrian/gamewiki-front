import type { BaseRequestInterface } from "../interfaces/dto/BaseRequestInterface";
import type { BaseModelInterface } from "../interfaces/dto/BaseModelInterface";
import type { BaseServiceInterface } from "../interfaces/urm/BaseServiceInterface";
import type { BaseRepository } from "./BaseRepository";
import type { BaseMapper } from "./BaseMapper";

export class BaseService<
  TModel extends BaseModelInterface,
  TRequest extends BaseRequestInterface,
> implements BaseServiceInterface<TModel> {
  constructor(
    repository: BaseRepository<TRequest, TModel>,
    mapper: BaseMapper<TModel, TRequest>,
  ) {
    this.repository = repository;
    this.mapper = mapper;
  }
  protected repository: BaseRepository<TRequest, TModel>;
  protected mapper: BaseMapper<TModel, TRequest>; 

  async create(entity: TModel): Promise<TModel> {
    const request = await this.mapper.entToRequest(entity);
    const response = await this.repository.create(request);
    return this.mapper.responseToEnt(response);
  }

  async getById(id: string): Promise<TModel> {
    const request = {
      uri: `/${id}`,
    } as TRequest;

    const response = await this.repository.getById(request);
    return this.mapper.responseToEnt(response);
  }

  async getAll(): Promise<TModel[]> {
    const request = {
      uri: "/",
    } as TRequest;

    const response = await this.repository.getAll(request);
    return this.mapper.responseArrayToEntArray(response);
  }

  async updateById(id: string, entity: TModel): Promise<TModel> {
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
