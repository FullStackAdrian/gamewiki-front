import { BaseRepository } from "../../../base/BaseRepository";
// dtos
import type { MaterialModelInterface } from "../../../../domain/features/ZeldaBOTW/Materials/MaterialModelInterface";
import type { CreateMaterialRequestInterface } from "../../../../domain/features/ZeldaBOTW/Materials/dto/requests/CreateMaterialRequestInterface";
import type { CreateMaterialResponseInterface } from "../../../../domain/features/ZeldaBOTW/Materials/dto/responses/CreateMaterialResponseInterface";
import type { GetMaterialByIdRequestInterface } from "../../../../domain/features/ZeldaBOTW/Materials/dto/requests/GetMaterialByIdRequestInterface";
import type { GetMaterialByIdResponseInterface } from "../../../../domain/features/ZeldaBOTW/Materials/dto/responses/GetMaterialByIdResponseInterface";
import type { GetAllMaterialsRequestInterface } from "../../../../domain/features/ZeldaBOTW/Materials/dto/requests/GetAllMaterialsRequestInterface";
import type { GetAllMaterialsResponseInterface } from "../../../../domain/features/ZeldaBOTW/Materials/dto/responses/GetAllMaterialsResponseInterface";
import type { UpdateMaterialByIdRequestInterface } from "../../../../domain/features/ZeldaBOTW/Materials/dto/requests/UpdateMaterialByIdRequestInterface";
import type { UpdateMaterialByIdResponseInterface } from "../../../../domain/features/ZeldaBOTW/Materials/dto/responses/UpdateMaterialByIdResponseInterface";
import type { DeleteMaterialByIdRequestInterface } from "../../../../domain/features/ZeldaBOTW/Materials/dto/requests/DeleteMaterialByIdRequestInterface";
import type { DeleteMaterialByIdResponseInterface } from "../../../../domain/features/ZeldaBOTW/Materials/dto/responses/DeleteMaterialByIdResponseInterface";

export class MaterialRepository extends BaseRepository<MaterialModelInterface> {
  constructor() {
    super("http://localhost:3001", null);
  }

  async createMaterial(request: CreateMaterialRequestInterface) {
    return this.create<
      CreateMaterialRequestInterface,
      CreateMaterialResponseInterface
    >(request);
  }

  async getMaterial(request: GetMaterialByIdRequestInterface) {
    return this.getById<
      GetMaterialByIdRequestInterface,
      GetMaterialByIdResponseInterface
    >(request);
  }

  async getAllMaterials(request: GetAllMaterialsRequestInterface) {
    return this.getAll<
      GetAllMaterialsRequestInterface,
      GetAllMaterialsResponseInterface
    >(request);
  }

  async updateMaterial(request: UpdateMaterialByIdRequestInterface) {
    return this.updateById<
      UpdateMaterialByIdRequestInterface,
      UpdateMaterialByIdResponseInterface
    >(request);
  }

  async deleteMaterial(request: DeleteMaterialByIdRequestInterface) {
    return this.deleteById<
      DeleteMaterialByIdRequestInterface,
      DeleteMaterialByIdResponseInterface
    >(request);
  }
}
