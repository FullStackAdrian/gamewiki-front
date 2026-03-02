import type { BaseModelInterface } from "../dto/BaseModelInterface";
import type { BaseRequestInterface } from "../dto/BaseRequestInterface";
import type { BaseResponseInterface } from "../dto/BaseResponseInterface";

export interface BaseMapperInterface<
  TModel extends BaseModelInterface,
  TRequest extends BaseRequestInterface,
  TResponse extends BaseResponseInterface<TModel | TModel[]>,
> {
  toRequest: {
    (ent?: TModel): Promise<TRequest>; 
    (id: string): Promise<TRequest>; 
  };
  responseToEnt(response: TResponse): Promise<TModel>;
  responseArrayToEntArray(response: TResponse): Promise<TModel[]>;
}
