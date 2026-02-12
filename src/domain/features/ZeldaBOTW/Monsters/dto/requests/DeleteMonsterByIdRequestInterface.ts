import type { BaseRequestInterface } from "../../../../../abstractions/dto/BaseRequestInterface";

export interface DeleteMonsterByIdRequestInterface extends BaseRequestInterface {
  uri: string;
  token?: never;
  body?: never;
}
