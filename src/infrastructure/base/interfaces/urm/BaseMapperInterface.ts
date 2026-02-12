import type { BaseModelInterface } from "../dto/BaseModelInterface";
import type { BaseRequestInterface } from "../dto/BaseRequestInterface";
import type { BaseResponseInterface } from "../dto/BaseResponseInterface";

export interface BaseMapperInterface<
  TModel extends BaseModelInterface,
> {
  entToRequest<TRequest extends BaseRequestInterface>(ent: TModel): Promise<TRequest>;
  responseToEnt<TResponse extends BaseResponseInterface<TModel>>(response: TResponse): Promise<TModel>;
  responseArrayToEntArray<TResponse extends BaseResponseInterface<TModel[]>>(
    response: TResponse,
  ): Promise<TModel[]>;
}
