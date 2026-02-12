import type { BaseRequestInterface } from "../../../../../abstractions/dto/BaseRequestInterface";

export interface CreateMonsterRequestInterface extends BaseRequestInterface { 
    uri: string; 
    token?: never; 
    body: JSON;
}