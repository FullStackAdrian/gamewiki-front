import type { BaseServiceInterface } from "./../../../abstractions/base/BaseServiceInterface";
import type { MaterialModelInterface } from "./MaterialModelInterface";

export interface MaterialServiceInterface extends BaseServiceInterface<MaterialModelInterface> {
  createMaterial(entity: MaterialModelInterface): Promise<MaterialModelInterface>;
  getMaterialById(id: string): Promise<MaterialModelInterface>;
  getAllMaterials(): Promise<MaterialModelInterface[]>;
  updateMaterial(entity: MaterialModelInterface): Promise<MaterialModelInterface>;
  deleteMaterial(id: string): Promise<void>;
}
