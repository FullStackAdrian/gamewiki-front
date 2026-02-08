import type { BaseResponseInterface } from "../interfaces/dto/BaseResponseInterface";

export abstract class BaseMapper<TEnt, TRequest> {
  abstract entToRequest(ent: TEnt): Promise<TRequest>;
  abstract responseToEnt(response: BaseResponseInterface<TEnt>): Promise<TEnt>;
  abstract responseArrayToEntArray(
    response: BaseResponseInterface<TEnt[]>,
  ): Promise<TEnt[]>;
}
