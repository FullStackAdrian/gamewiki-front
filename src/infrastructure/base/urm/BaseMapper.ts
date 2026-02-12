import type { BaseModelInterface } from "../../../domain/abstractions/dto/BaseModelInterface";
import type { BaseRequestInterface } from "../../../domain/abstractions/dto/BaseRequestInterface";
import type { BaseResponseInterface } from "../../../domain/abstractions/dto/BaseResponseInterface";
import type { BaseMapperInterface } from "../interfaces/urm/BaseMapperInterface";

export abstract class BaseMapper<
  TModel extends BaseModelInterface,
> implements BaseMapperInterface<TModel> {
  abstract entToRequest<TRequest extends BaseRequestInterface>(
    ent: TModel,
  ): Promise<TRequest>;
  abstract responseToEnt<TResponse extends BaseResponseInterface<TModel>>(
    response: TResponse,
  ): Promise<TModel>;
  abstract responseArrayToEntArray<
    TResponse extends BaseResponseInterface<TModel[]>,
  >(response: TResponse): Promise<TModel[]>;
}
