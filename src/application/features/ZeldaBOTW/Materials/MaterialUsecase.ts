import type { MaterialModelInterface } from "../../../../domain/features/ZeldaBOTW/Materials/MaterialModelInterface";
import type { MaterialServiceInterface } from "../../../../domain/features/ZeldaBOTW/Materials/MaterialServiceInterface";
import type { MaterialUsecaseInterface } from "../../../../domain/features/ZeldaBOTW/Materials/MaterialUsecaseInterface";

export class MaterialUsecase implements MaterialUsecaseInterface {
  private materialService: MaterialServiceInterface;

  constructor(materialService: MaterialServiceInterface) {
    this.materialService = materialService;
  }

  async getNextMaterialId(): Promise<number> {
    const materials = await this.materialService.getAllMaterials();

    if (materials.length === 0) {
      return 1;
    }

    const ids = materials.map((m) => m.id_num);
    const maxId = Math.max(...ids);

    return maxId + 1;
  }

  async createMaterial(entity: MaterialModelInterface): Promise<MaterialModelInterface> {
    return  await this.materialService.createMaterial(entity);
  }

  async getMaterialById(id: string): Promise<MaterialModelInterface> {
    return  await this.materialService.getMaterialById(id);
  }

  async getAllMaterials(): Promise<MaterialModelInterface[]> {
    return  await this.materialService.getAllMaterials();
  }

  async updateMaterial(entity: MaterialModelInterface): Promise<MaterialModelInterface> {
    return  await this.materialService.updateMaterial(entity);
  }

  async deleteMaterial(id: string): Promise<void> {
    return  await this.materialService.deleteMaterial(id);
  }
}
