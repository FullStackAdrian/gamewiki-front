import type { BaseRequestInterface } from "../interfaces/dto/BaseRequestInterface";
import type { BaseResponseInterface } from "../interfaces/dto/BaseResponseInterface";
import type { BaseModelInterface } from "../interfaces/dto/BaseModelInterface";
import type { BaseRepositoryInterface } from "../interfaces/urm/BaseRepositoryInterface";
import createRequest from "../utils/api";

export abstract class BaseRepository<
  TRequest extends BaseRequestInterface,
  TModel extends BaseModelInterface,
> implements BaseRepositoryInterface<TRequest, TModel> {
  // get type for instance in constructor.
  private api: ReturnType<typeof createRequest>;

  constructor(baseURL: string, token?: string | null) {
    this.api = createRequest(baseURL, token ?? null);
  }

  async create(request: TRequest): Promise<BaseResponseInterface<TModel>> {
    return this.api.post<TModel, TRequest>(request);
  }

  async getById(request: TRequest): Promise<BaseResponseInterface<TModel>> {
    return this.api.get<TModel, TRequest>(request);
  }

  async getAll(request: TRequest): Promise<BaseResponseInterface<TModel[]>> {
    return await this.api.get<TModel[], TRequest>(request);
  }

  async updateById(request: TRequest): Promise<BaseResponseInterface<TModel>> {
    return this.api.put<TModel, TRequest>(request);
  }

  async deleteById(request: TRequest): Promise<BaseResponseInterface<TModel>> {
    return this.api.delete<TModel, TRequest>(request);
  }
}
