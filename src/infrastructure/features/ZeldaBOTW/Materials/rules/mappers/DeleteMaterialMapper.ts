import type { DeleteMaterialByIdRequestInterface } from "../../../../../../domain/features/ZeldaBOTW/Materials/dto/requests/DeleteMaterialByIdRequestInterface";
import type { DeleteMaterialByIdResponseInterface } from "../../../../../../domain/features/ZeldaBOTW/Materials/dto/responses/DeleteMaterialByIdResponseInterface";
import type { MaterialModelInterface } from "../../../../../../domain/features/ZeldaBOTW/Materials/MaterialModelInterface";
import { BaseMapper } from "../../../../../base/BaseMapper";

export class DeleteMaterialMapper extends BaseMapper<
  MaterialModelInterface,
  DeleteMaterialByIdRequestInterface,
  DeleteMaterialByIdResponseInterface
> {
    async toRequest(
    param: MaterialModelInterface | string | undefined 
  ): Promise<DeleteMaterialByIdRequestInterface> {
    if (typeof param === 'string') {
      const request = {
        uri: `/materials/${param}`,
      } as DeleteMaterialByIdRequestInterface;
      return request;
    } else if (param !== undefined) {
      throw new Error(
        "DeleteMaterialMapper solo soporta la eliminación por ID. No se acepta una entidad completa.",
      );
    } else {
      throw new Error(
        "Invalid parameters provided to toRequest. Se requiere un ID.",
      );
    }
  }

  async responseToEnt(
    response: DeleteMaterialByIdResponseInterface,
  ): Promise<MaterialModelInterface> {
    throw new Error(
      "No need to use this method in  Delete by id request type." + response.message,
    );
  }

  // this method is a formalism
  // i have to fix the issue of no implement this method in a no needed mapper
  // maybe creating every base type mapper is the best solution.
  async responseArrayToEntArray(
    response: DeleteMaterialByIdResponseInterface,
  ): Promise<MaterialModelInterface[]> {
    throw new Error(
      "No need to use this method in  Delete by id request type." +
        response.message,
    );
  }
}
