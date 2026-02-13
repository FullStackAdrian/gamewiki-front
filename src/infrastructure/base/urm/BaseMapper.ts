import type { BaseModelInterface } from "../../../domain/abstractions/dto/BaseModelInterface";
import type { BaseRequestInterface } from "../../../domain/abstractions/dto/BaseRequestInterface";
import type { BaseResponseInterface } from "../../../domain/abstractions/dto/BaseResponseInterface";
import type { BaseMapperInterface } from "../interfaces/urm/BaseMapperInterface";

export abstract class BaseMapper<
  TModel extends BaseModelInterface,
  TRequest extends BaseRequestInterface,
  TResponse extends BaseResponseInterface<TModel>,
> implements BaseMapperInterface<TModel, TRequest, TResponse> {

  abstract entToRequest(ent: TModel): Promise<TRequest>;
  abstract responseToEnt(response: TResponse): Promise<TModel>;
  abstract responseArrayToEntArray(response: TResponse): Promise<TModel[]>;
}
