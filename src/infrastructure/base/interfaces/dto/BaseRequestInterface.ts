export interface BaseRequestInterface {
  uri: string;
  token?: string;
  // this type will be overrided in hereditance
  body?: unknown;
}
