import type { BaseRequestInterface } from "../../../../../abstractions/dto/BaseRequestInterface";

export interface DeleteMaterialByIdRequestInterface extends BaseRequestInterface {
  uri: string;
  token?: never;
  body?: never;
}
