import type { BaseModelInterface } from "./BaseModelInterface";

export interface BaseResponseInterface<TModel extends BaseModelInterface> {
  status: number;
  message?: string;
  data?: TModel | TModel[];
}
