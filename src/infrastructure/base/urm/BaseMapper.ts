import type { BaseModelInterface } from "../interfaces/dto/BaseModelInterface";
import type { BaseRequestInterface } from "../interfaces/dto/BaseRequestInterface";
import type { BaseResponseInterface } from "../interfaces/dto/BaseResponseInterface";

export abstract class BaseMapper<TModel extends BaseModelInterface, TRequest extends BaseRequestInterface> {
  abstract entToRequest(ent: TModel): Promise<TRequest>;
  abstract responseToEnt(response: BaseResponseInterface<TModel>): Promise<TModel>;
  abstract responseArrayToEntArray(
    response: BaseResponseInterface<TModel[]>,
  ): Promise<TModel[]>;
}
