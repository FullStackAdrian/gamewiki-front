import type { BaseRequestInterface } from "../dto/BaseRequestInterface";
import type { BaseResponseInterface } from "../dto/BaseResponseInterface";

export interface BaseRepositoryInterface<
  TRequest extends BaseRequestInterface,
  T,
> {
  create(request: TRequest): Promise<BaseResponseInterface<T>>;
  getById(id: string): Promise<BaseResponseInterface<T>>;
  getAll(): Promise<BaseResponseInterface<T>[]>;
  updateById(id: string, request: TRequest): Promise<BaseResponseInterface<T>>;
  deleteById(id: string): Promise<BaseResponseInterface<T>>;
}
