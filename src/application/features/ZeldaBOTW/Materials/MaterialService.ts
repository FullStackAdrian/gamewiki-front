import { BaseService } from "../../../shared/base/BaseService";
import type { MaterialModelInterface } from "../../../../domain/features/ZeldaBOTW/Materials/MaterialModelInterface";
import type { MaterialRepositoryInterface } from "../../../../domain/features/ZeldaBOTW/Materials/MaterialRepositoryInterface";
import type { MaterialServiceInterface } from "../../../../domain/features/ZeldaBOTW/Materials/MaterialServiceInterface";
// mappers
import { CreateMaterialMapper } from "../../../../infrastructure/features/ZeldaBOTW/Materials/rules/mappers/CreateMaterialMapper";
import { GetMaterialMapper } from "../../../../infrastructure/features/ZeldaBOTW/Materials/rules/mappers/GetMaterialMapper";
import { GetAllMaterialser } from "../../../../infrastructure/features/ZeldaBOTW/Materials/rules/mappers/GetAllMaterialsMapper";
import { UpdateMaterialMapper } from "../../../../infrastructure/features/ZeldaBOTW/Materials/rules/mappers/UpdateMaterialMapper";
import { DeleteMaterialMapper } from "../../../../infrastructure/features/ZeldaBOTW/Materials/rules/mappers/DeleteMaterialMapper";

export class MaterialService
  extends BaseService<MaterialModelInterface, MaterialRepositoryInterface>
  implements MaterialServiceInterface
{
  constructor(repository: MaterialRepositoryInterface) {
    super(repository);
  }

  async createMaterial(
    entity: MaterialModelInterface,
  ): Promise<MaterialModelInterface> {
    const mapper = new CreateMaterialMapper();
    return await super.create(entity, mapper);
  }

  async getMaterialById(id: string): Promise<MaterialModelInterface> {
    const mapper = new GetMaterialMapper();
    return await super.getById(id, mapper);
  }

  async getAllMaterials(): Promise<MaterialModelInterface[]> {
    const mapper = new GetAllMaterialser();
    return await super.getAll(mapper);
  }

  async updateMaterial(
    entity: MaterialModelInterface,
  ): Promise<MaterialModelInterface> {
    const mapper = new UpdateMaterialMapper();
    return await super.updateById(entity, mapper);
  }

  async deleteMaterial(id: string): Promise<void> {
    const mapper = new DeleteMaterialMapper();
    return await super.deleteById(id, mapper);
  }
}
