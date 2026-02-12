import type { BaseModelInterface } from "../dto/BaseModelInterface";
import type { BaseRequestInterface } from "../dto/BaseRequestInterface";
import type { BaseResponseInterface } from "../dto/BaseResponseInterface";

export interface BaseRepositoryInterface<TModel extends BaseModelInterface> {
  create<
    TRequest extends BaseRequestInterface,
    TResponse extends BaseResponseInterface<TModel>,
  >(
    request: TRequest,
  ): Promise<TResponse>;
  getById<
    TRequest extends BaseRequestInterface,
    TResponse extends BaseResponseInterface<TModel>,
  >(
    request: TRequest,
  ): Promise<TResponse>;
  getAll<
    TRequest extends BaseRequestInterface,
    TResponse extends BaseResponseInterface<TModel[]>,
  >(
    request: TRequest,
  ): Promise<TResponse>;
  updateById<
    TRequest extends BaseRequestInterface,
    TResponse extends BaseResponseInterface<TModel>,
  >(
    request: TRequest,
  ): Promise<TResponse>;
  deleteById<
    TRequest extends BaseRequestInterface,
    TResponse extends BaseResponseInterface<TModel>,
  >(
    request: TRequest,
  ): Promise<TResponse>;
}
