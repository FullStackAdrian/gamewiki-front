import type { BaseRepositoryInterface } from "./../../../abstractions/base/BaseRepositoryInterface";
import type { MonsterModelInterface } from "./MonsterModelInterface";

export interface MonsterRepositoryInterface extends BaseRepositoryInterface<MonsterModelInterface> {
  // All methods (create, getById, etc.) are now INHERITED from BaseRepositoryInterface<MonsterModel>.
}
