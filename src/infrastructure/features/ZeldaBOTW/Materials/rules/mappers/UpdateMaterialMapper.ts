import type { UpdateMaterialByIdRequestInterface } from "../../../../../../domain/features/ZeldaBOTW/Materials/dto/requests/UpdateMaterialByIdRequestInterface";
import type { UpdateMaterialByIdResponseInterface } from "../../../../../../domain/features/ZeldaBOTW/Materials/dto/responses/UpdateMaterialByIdResponseInterface";
import type { MaterialModelInterface } from "../../../../../../domain/features/ZeldaBOTW/Materials/MaterialModelInterface";
import { BaseMapper } from "../../../../../base/BaseMapper";

export class UpdateMaterialMapper extends BaseMapper<
  MaterialModelInterface,
  UpdateMaterialByIdRequestInterface,
  UpdateMaterialByIdResponseInterface
> {
  async toRequest(
    param: MaterialModelInterface | string | undefined,
  ): Promise<UpdateMaterialByIdRequestInterface> {
    if (typeof param === "string") {
      throw new Error(
        "UpdateMaterialMapper toRequest do not suport just and id, it requires a full ent.",
      );
    } else if (param === undefined) {
      throw new Error(
        "UpdateMaterialMapper toRequest can not have undefined parameter, it requires a full ent.",
      );
    } else {
      const ent = param as MaterialModelInterface;
      const requestBody = JSON.parse(JSON.stringify(ent));
      const request = {
        uri: `/materials/${ent.id_num}`,
        body: requestBody,
      } as UpdateMaterialByIdRequestInterface;

      return request;
    }
  }

  async responseToEnt(
    response: UpdateMaterialByIdResponseInterface,
  ): Promise<MaterialModelInterface> {
    return response.data;
  }

  // this method is a formalism
  // i have to fix the issue of no implement this method in a no needed mapper
  // maybe creating every base type mapper is the best solution.
  async responseArrayToEntArray(
    response: UpdateMaterialByIdResponseInterface,
  ): Promise<MaterialModelInterface[]> {
    throw new Error(
      "No need to use this method in  Update by id request type." +
        response.message,
    );
  }
}
