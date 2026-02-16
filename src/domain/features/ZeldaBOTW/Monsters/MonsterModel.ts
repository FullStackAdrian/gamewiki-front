import type { BaseModelInterface } from "../../../../abstractions/dto/BaseModelInterface";

export interface MonsterModel extends BaseModelInterface{ 
    id_num: number;
    name: string;
    category: string;
    common_locations: string[];
    description: string;
    drops: string[];
    image: string;
}