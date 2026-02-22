import type { BaseModelInterface } from "../dto/BaseModelInterface";
import type { BaseRequestInterface } from "../dto/BaseRequestInterface";
import type { BaseResponseInterface } from "../dto/BaseResponseInterface";
import type { BaseMapperInterface } from "./BaseMapperInterface";

export interface BaseServiceInterface<TModel extends BaseModelInterface> {
  create<
    TRequest extends BaseRequestInterface,
    TResponse extends BaseResponseInterface<TModel>,
    TMapper extends BaseMapperInterface<TModel, TRequest, TResponse>,
  >(
    entity: TModel,
    mapper: TMapper,
  ): Promise<TModel>;

  getById<
    TRequest extends BaseRequestInterface,
    TResponse extends BaseResponseInterface<TModel>,
    TMapper extends BaseMapperInterface<TModel, TRequest, TResponse>,
  >(
    id: string,
    mapper: TMapper,
  ): Promise<TModel>;

  getAll<
    TRequest extends BaseRequestInterface,
    TResponse extends BaseResponseInterface<TModel[]>,
    TMapper extends BaseMapperInterface<TModel, TRequest, TResponse>,
  >(
    mapper: TMapper
  ): Promise<TModel[]>;

  updateById<
    TRequest extends BaseRequestInterface,
    TResponse extends BaseResponseInterface<TModel>,
    TMapper extends BaseMapperInterface<TModel, TRequest, TResponse>,
  >(
    entity: TModel,
    mapper: TMapper,
  ): Promise<TModel>;

  deleteById<
    TRequest extends BaseRequestInterface,
    TResponse extends BaseResponseInterface<TModel>,
    TMapper extends BaseMapperInterface<TModel, TRequest, TResponse>,
  >(
    id: string,
    mapper: TMapper,
  ): Promise<void>;
}