import type { BaseRequestInterface } from "../../../../../abstractions/dto/BaseRequestInterface";

export interface GetMonsterByIdRequestInterface extends BaseRequestInterface { 
    uri: string; 
    token?:never; 
    body?: never; 
}