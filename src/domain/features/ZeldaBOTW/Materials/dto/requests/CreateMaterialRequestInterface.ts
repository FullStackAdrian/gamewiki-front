import type { BaseRequestInterface } from "../../../../../abstractions/dto/BaseRequestInterface";

export interface CreateMaterialRequestInterface extends BaseRequestInterface { 
    uri: string; 
    token?: never; 
    body: JSON;
}