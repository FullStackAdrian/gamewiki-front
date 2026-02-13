import type { BaseResponseInterface } from "../../../../../abstractions/dto/BaseResponseInterface";
import type { MonsterModel } from "../../model/MonsterModel";

export interface GetAllMonstersResponseInterface extends BaseResponseInterface<MonsterModel>{
    status: number; 
    message?: string; 
    data: MonsterModel[];
}