import type { BaseModelInterface } from "../../../../domain/abstractions/dto/BaseModelInterface";
import type { BaseRequestInterface } from "../../../../domain/abstractions/dto/BaseRequestInterface";
import type { BaseResponseInterface } from "../../../../domain/abstractions/dto/BaseResponseInterface";

export interface BaseMapperInterface<
  TModel extends BaseModelInterface,
  TRequest extends BaseRequestInterface,
  TResponse extends BaseResponseInterface<TModel>,
> {
  entToRequest(ent: TModel): Promise<TRequest>;
  responseToEnt(response: TResponse): Promise<TModel>;
  responseArrayToEntArray(
    response: TResponse,
  ): Promise<TModel[]>;
}
