import type { BaseModelInterface } from "../../../../domain/abstractions/dto/BaseModelInterface";

export interface BaseServiceInterface<TModel extends BaseModelInterface> {
  create(entity: TModel): Promise<TModel>;
  getById(id: string): Promise<TModel>;
  getAll(): Promise<TModel[]>;
  updateById(entity: TModel): Promise<TModel>;
  deleteById(id: string): Promise<void>;
}
