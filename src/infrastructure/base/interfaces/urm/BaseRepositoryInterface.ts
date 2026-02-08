import type { BaseRequestInterface } from "../dto/BaseRequestInterface";
import type { BaseResponseInterface } from "../dto/BaseResponseInterface";

export interface BaseRepositoryInterface<
  TRequest extends BaseRequestInterface,
  T,
> {
  create(request: TRequest): Promise<BaseResponseInterface<T>>;
  getById(request: TRequest): Promise<BaseResponseInterface<T>>;
  getAll(request: TRequest): Promise<BaseResponseInterface<T[]>>;
  updateById(request: TRequest): Promise<BaseResponseInterface<T>>;
  deleteById(request: TRequest): Promise<BaseResponseInterface<T>>;
}
