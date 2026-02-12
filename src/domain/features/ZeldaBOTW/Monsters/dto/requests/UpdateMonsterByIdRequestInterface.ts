import type { BaseRequestInterface } from "../../../../../abstractions/dto/BaseRequestInterface";

export interface UpdateMonsterByIdRequestInterface extends BaseRequestInterface {
  uri: string;
  token?: never;
  body: JSON;
}
