import type { BaseModelInterface } from "../../../../domain/abstractions/dto/BaseModelInterface";
import type { BaseRequestInterface } from "../../../../domain/abstractions/dto/BaseRequestInterface";
import type { BaseResponseInterface } from "../../../../domain/abstractions/dto/BaseResponseInterface";

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
