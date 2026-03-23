import type { BaseRepositoryInterface } from "./../../../abstractions/base/BaseRepositoryInterface";
import type { MaterialModelInterface } from "./MaterialModelInterface";

export interface MaterialRepositoryInterface extends BaseRepositoryInterface<MaterialModelInterface> {
  // All methods (create, getById, etc.) are now INHERITED from BaseRepositoryInterface<MaterialModel>.
}
