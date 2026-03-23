import type { BaseRequestInterface } from "../../../../../abstractions/dto/BaseRequestInterface";

export interface GetMaterialByIdRequestInterface extends BaseRequestInterface { 
    uri: string; 
    token?:never; 
    body?: never; 
}