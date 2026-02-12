import type { BaseRequestInterface } from "../../../../../abstractions/dto/BaseRequestInterface";

export interface GetAllMonstersRequestInterface extends BaseRequestInterface { 
    uri: string; 
    token?: never;
    body?:never;

}