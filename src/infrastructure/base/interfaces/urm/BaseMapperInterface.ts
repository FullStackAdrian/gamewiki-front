import type { BaseRequestInterface } from "../dto/BaseRequestInterface";
import type { BaseResponseInterface } from "../dto/BaseResponseInterface";
import type { BaseEntityInterface } from "./BaseEntityInterface";

export interface BaseMapperInterface<
  TRequest extends BaseRequestInterface,
  TEnt extends BaseEntityInterface,
> {
  entToRequest(ent: TEnt): Promise<TRequest>;
  responseToEnt(response: BaseResponseInterface<TEnt>): Promise<TEnt>;
  responseArrayToEntArray(
    response: BaseResponseInterface<TEnt[]>,
  ): Promise<TEnt[]>;
}
