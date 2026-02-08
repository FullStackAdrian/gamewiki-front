import type { BaseResponseInterface } from "../interfaces/dto/BaseResponseInterface";

export abstract class BaseMapper<TEnt, TRequest> {
  abstract entToRequest(ent: TEnt): TRequest;
  abstract responseToEnt(response: BaseResponseInterface<TEnt>): TEnt;
} 