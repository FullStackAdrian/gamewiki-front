import type { BaseEntityInterface } from "./BaseEntityInterface";

export interface BaseServiceInterface<TEnt extends BaseEntityInterface> {
  create(entity: TEnt): Promise<TEnt>;
  getById(id: string): Promise<TEnt>;
  getAll(): Promise<TEnt[]>;
  updateById(id: string, entity: TEnt): Promise<TEnt>;
  deleteById(id: string): Promise<void>;
}
