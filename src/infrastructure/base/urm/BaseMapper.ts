import type { BaseModelInterface } from "../interfaces/dto/BaseModelInterface";
import type { BaseRequestInterface } from "../interfaces/dto/BaseRequestInterface";
import type { BaseResponseInterface } from "../interfaces/dto/BaseResponseInterface";
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
