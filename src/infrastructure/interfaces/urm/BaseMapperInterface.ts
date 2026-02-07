import type { BaseRequest } from "../dto/BaseRequest";
import type { BaseResponse } from "../dto/BaseResponse";
import type { BaseEntityInterface } from "./BaseEntityInterface";

export interface BaseMapperInterface< TRequest extends BaseRequest, TResponse extends BaseResponse, TEnt extends BaseEntityInterface> {

  entToRequest( ent: TEnt ): Promise<TRequest>;
  responseToEnt( response: TResponse ): Promise<TEnt>;

}

