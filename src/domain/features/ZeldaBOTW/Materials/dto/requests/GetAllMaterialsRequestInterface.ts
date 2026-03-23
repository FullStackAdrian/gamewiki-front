import type { BaseRequestInterface } from "../../../../../abstractions/dto/BaseRequestInterface";

export interface GetAllMaterialsRequestInterface extends BaseRequestInterface { 
    uri: string; 
    token?: never;
    body?:never;

}