import type { MaterialModelInterface } from "./MaterialModelInterface";

export interface MaterialUsecaseInterface {
  createMaterial(entity: MaterialModelInterface): Promise<MaterialModelInterface>;
  getMaterialById(id: string): Promise<MaterialModelInterface>;
  getAllMaterials(): Promise<MaterialModelInterface[]>;
  updateMaterial(entity: MaterialModelInterface): Promise<MaterialModelInterface>;
  deleteMaterial(id: string): Promise<void>;
}
