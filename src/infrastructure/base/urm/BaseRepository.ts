import type { BaseRequestInterface } from "../interfaces/dto/BaseRequestInterface";
import type { BaseResponseInterface } from "../interfaces/dto/BaseResponseInterface";
import type { BaseRepositoryInterface } from "../interfaces/urm/BaseRepositoryInterface";
import createRequest from "../utils/api";

export abstract class BaseRepository<
  TRequest extends BaseRequestInterface,
  TEnt,
> implements BaseRepositoryInterface<TRequest, TEnt> {
  // get type for instance in constructor.
  private api: ReturnType<typeof createRequest>;

  constructor(baseURL: string, token?: string | null) {
    this.api = createRequest(baseURL, token ?? null);
  }

  async create(request: TRequest): Promise<BaseResponseInterface<TEnt>> {
    return this.api.post<TEnt, TRequest>(request);
  }

  async getById(request: TRequest): Promise<BaseResponseInterface<TEnt>> {
    return this.api.get<TEnt, TRequest>(request);
  }

  async getAll(request: TRequest): Promise<BaseResponseInterface<TEnt[]>> {
    return await this.api.get<TEnt[], TRequest>(request);
  }

  async updateById(request: TRequest): Promise<BaseResponseInterface<TEnt>> {
    return this.api.put<TEnt, TRequest>(request);
  }

  async deleteById(request: TRequest): Promise<BaseResponseInterface<TEnt>> {
    return this.api.delete<TEnt, TRequest>(request);
  }
}
