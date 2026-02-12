import type { BaseRequestInterface } from "../interfaces/dto/BaseRequestInterface";
import type { BaseResponseInterface } from "../interfaces/dto/BaseResponseInterface";
import type { BaseModelInterface } from "../interfaces/dto/BaseModelInterface";
import type { BaseRepositoryInterface } from "../interfaces/urm/BaseRepositoryInterface";
import createRequest from "../utils/api";

export abstract class BaseRepository<
  TModel extends BaseModelInterface,
> implements BaseRepositoryInterface<TModel> {
  // get type for instance in constructor.
  private api: ReturnType<typeof createRequest>;

  constructor(baseURL: string, token?: string | null) {
    this.api = createRequest(baseURL, token ?? null);
  }

  async create<
    TRequest extends BaseRequestInterface,
    TResponse extends BaseResponseInterface<TModel>,
  >(request: TRequest): Promise<TResponse> {
    return this.api.post<TModel, TRequest, TResponse>(request);
  }

  async getById<
    TRequest extends BaseRequestInterface,
    TResponse extends BaseResponseInterface<TModel>,
  >(request: TRequest): Promise<TResponse> {
    return this.api.get<TModel, TRequest, TResponse>(request);
  }

  async getAll<
    TRequest extends BaseRequestInterface,
    TResponse extends BaseResponseInterface<TModel[]>,
  >(request: TRequest): Promise<TResponse> {
    return await this.api.get<TModel[], TRequest, TResponse>(request);
  }

  async updateById<
    TRequest extends BaseRequestInterface,
    TResponse extends BaseResponseInterface<TModel>,
  >(request: TRequest): Promise<TResponse> {
    return this.api.put<TModel, TRequest, TResponse>(request);
  }

  async deleteById<
    TRequest extends BaseRequestInterface,
    TResponse extends BaseResponseInterface<TModel>,
  >(request: TRequest): Promise<TResponse> {
    return this.api.delete<TModel, TRequest, TResponse>(request);
  }
}
