import type { BaseResponseInterface } from "../../../../../abstractions/dto/BaseResponseInterface";
import type { MaterialModel } from "../../model/MaterialModel";

export interface GetMaterialByIdResponseInterface extends BaseResponseInterface<MaterialModel>{
    status: number; 
    message?: string; 
    data: MaterialModel;
}