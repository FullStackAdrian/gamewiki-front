import type { BaseModelInterface } from "../../../domain/abstractions/dto/BaseModelInterface";
import type { BaseRepositoryInterface } from "../../../domain/abstractions/base/BaseRepositoryInterface";
import type { BaseMapperInterface } from "../../../domain/abstractions/base/BaseMapperInterface";
import type { BaseServiceInterface } from "../../../domain/abstractions/base/BaseServiceInterface";
import type { BaseRequestInterface } from "../../../domain/abstractions/dto/BaseRequestInterface";
import type { BaseResponseInterface } from "../../../domain/abstractions/dto/BaseResponseInterface";

export class BaseService<
  TModel extends BaseModelInterface,
  TRepository extends BaseRepositoryInterface<TModel>,
> implements BaseServiceInterface<TModel> {
  constructor(repository: TRepository) {
    this.repository = repository;
  }
  protected repository: TRepository;

  async create<
    TRequest extends BaseRequestInterface,
    TResponse extends BaseResponseInterface<TModel>,
    TMapper extends BaseMapperInterface<TModel, TRequest, TResponse>,
  >(entity: TModel, mapper: TMapper): Promise<TModel> {
    const request = await mapper.toRequest(entity);
    const response = await this.repository.create<TRequest, TResponse>(request);
    return mapper.responseToEnt(response);
  }

  async getById<
    TRequest extends BaseRequestInterface,
    TResponse extends BaseResponseInterface<TModel>,
    TMapper extends BaseMapperInterface<TModel, TRequest, TResponse>,
  >(id: string, mapper: TMapper): Promise<TModel> {
    const request = {
      uri: `/${id}`,
    } as TRequest;

    const response = await this.repository.getById<TRequest, TResponse>(
      request,
    );
    return mapper.responseToEnt(response);
  }

  async getAll<
    TRequest extends BaseRequestInterface,
    TResponse extends BaseResponseInterface<TModel[]>,
    TMapper extends BaseMapperInterface<TModel, TRequest, TResponse>,
  >(mapper: TMapper): Promise<TModel[]> {
    const request = await mapper.toRequest();
    const response = await this.repository.getAll<TRequest, TResponse>(request);
    return mapper.responseArrayToEntArray(response);
  }

  async updateById<
    TRequest extends BaseRequestInterface,
    TResponse extends BaseResponseInterface<TModel>,
    TMapper extends BaseMapperInterface<TModel, TRequest, TResponse>,
  >(entity: TModel, mapper: TMapper): Promise<TModel> {
    const request = await mapper.toRequest(entity);
    const response = await this.repository.updateById<TRequest, TResponse>(
      request,
    );
    return mapper.responseToEnt(response);
  }

  async deleteById<
    TRequest extends BaseRequestInterface,
    TResponse extends BaseResponseInterface<TModel>,
    TMapper extends BaseMapperInterface<TModel, TRequest, TResponse>,
  >(id: string, mapper: TMapper): Promise<void> {
    const request = await mapper.toRequest(id);
    await this.repository.deleteById<TRequest, TResponse>(request);
  }
}