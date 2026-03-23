import type { BaseRequestInterface } from "../../../../../abstractions/dto/BaseRequestInterface";

export interface UpdateMaterialByIdRequestInterface extends BaseRequestInterface {
  uri: string;
  token?: never;
  body: JSON;
}
