import type { BaseResponseInterface } from "../../../../../abstractions/dto/BaseResponseInterface";
import type { MonsterModel } from "../../model/MonsterModel";

export interface UpdateMonsterByIdResponseInterface  extends BaseResponseInterface<MonsterModel>{
    status: number; 
    message?: string; 
    data: MonsterModel;
}