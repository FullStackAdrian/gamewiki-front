import type { BaseRepositoryInterface } from "./../../../abstractions/base/BaseRepositoryInterface";
import type { MonsterModel } from "./MonsterModel";

export interface MonsterRepositoryInterface extends BaseRepositoryInterface<MonsterModel> {
  // All methods (create, getById, etc.) are now INHERITED from BaseRepositoryInterface<MonsterModel>.
}
