import type { BaseRequest } from "../dto/BaseRequest";
import type { BaseResponseInterface } from "../dto/BaseResponse";
import type { BaseEntityInterface } from "./BaseEntityInterface";

export interface BaseMapperInterface< TRequest extends BaseRequest, TResponse extends BaseResponseInterface, TEnt extends BaseEntityInterface> {

  entToRequest( ent: TEnt ): Promise<TRequest>;
  responseToEnt( response: TResponse ): Promise<TEnt>;

}

