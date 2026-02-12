import type { BaseServiceInterface } from "../interfaces/urm/BaseServiceInterface";
import type { BaseModelInterface } from "../interfaces/dto/BaseModelInterface";
import type { BaseRepositoryInterface } from "../interfaces/urm/BaseRepositoryInterface";
import type { BaseMapperInterface } from "../interfaces/urm/BaseMapperInterface";
import type { BaseRequestInterface } from "../interfaces/dto/BaseRequestInterface";
import type { BaseResponseInterface } from "../interfaces/dto/BaseResponseInterface";

export class BaseService<
  TModel extends BaseModelInterface,
  TRepository extends BaseRepositoryInterface<TModel>,
  TMapper extends BaseMapperInterface<TModel>,
> implements BaseServiceInterface<TModel> {
  constructor(repository: TRepository, mapper: TMapper) {
    this.repository = repository;
    this.mapper = mapper;
  }
  protected repository: TRepository;
  protected mapper: TMapper;

  async create<
    TRequest extends BaseRequestInterface,
    TResponse extends BaseResponseInterface<TModel>,
  >(entity: TModel): Promise<TModel> {
    const request = await this.mapper.entToRequest<TRequest>(entity);
    const response = await this.repository.create<TRequest, TResponse>(request);
    return this.mapper.responseToEnt<TResponse>(response);
  }

  async getById<
    TRequest extends BaseRequestInterface,
    TResponse extends BaseResponseInterface<TModel>,
  >(id: string): Promise<TModel> {
    const request = {
      uri: `/${id}`,
    } as TRequest;

    const response = await this.repository.getById<TRequest, TResponse>(
      request,
    );
    return this.mapper.responseToEnt<TResponse>(response);
  }

  async getAll<
    TRequest extends BaseRequestInterface,
    TResponse extends BaseResponseInterface<TModel[]>,
  >(): Promise<TModel[]> {
    const request = {
      uri: "/",
    } as TRequest;

    const response = await this.repository.getAll<TRequest, TResponse>(request);
    return this.mapper.responseArrayToEntArray<TResponse>(response);
  }

  async updateById<
    TRequest extends BaseRequestInterface,
    TResponse extends BaseResponseInterface<TModel>,
  >(entity: TModel): Promise<TModel> {
    const request = await this.mapper.entToRequest<TRequest>(entity);

    const response = await this.repository.updateById<TRequest, TResponse>(
      request,
    );
    return this.mapper.responseToEnt<TResponse>(response);
  }

  async deleteById<
    TRequest extends BaseRequestInterface,
    TResponse extends BaseResponseInterface<TModel>,
  >(id: string): Promise<void> {
    const request = {
      uri: `/${id}`,
    } as TRequest;

    await this.repository.deleteById<TRequest, TResponse>(request);
  }
}
