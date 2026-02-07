import type { BaseRequest } from "../dto/BaseRequest";
import type { BaseResponse } from "../dto/BaseResponse";

export interface BaseRepositoryInterface<
  TRequest extends BaseRequest,
  TResponse extends BaseResponse,
> {
  create(request: TRequest): Promise<TResponse>;
  getById(id: string): Promise<TResponse>;
  getAll(): Promise<TResponse[]>;
  updateById(id: string, request: TRequest): Promise<TResponse>;
  deleteById(id: string): Promise<void>;
}
