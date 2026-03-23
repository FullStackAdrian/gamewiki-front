import type { BaseModelInterface } from "../../../abstractions/dto/BaseModelInterface";

export interface MaterialModelInterface extends BaseModelInterface {
    id_num: number;
    name: string;
    category: string;
    common_locations: string[];
    description: string;
    cooking_effect: string;
    hearts_recovered: number;
    drops: string[];
    image?: string ;
}
