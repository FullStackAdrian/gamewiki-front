import type { BaseModelInterface } from "../../../../domain/abstractions/dto/BaseModelInterface";
import type { BaseRequestInterface } from "../../../../domain/abstractions/dto/BaseRequestInterface";
import type { BaseResponseInterface } from "../../../../domain/abstractions/dto/BaseResponseInterface";

export interface BaseMapperInterface<
  TModel extends BaseModelInterface,
> {
  entToRequest<TRequest extends BaseRequestInterface>(ent: TModel): Promise<TRequest>;
  responseToEnt<TResponse extends BaseResponseInterface<TModel>>(response: TResponse): Promise<TModel>;
  responseArrayToEntArray<TResponse extends BaseResponseInterface<TModel[]>>(
    response: TResponse,
  ): Promise<TModel[]>;
}
