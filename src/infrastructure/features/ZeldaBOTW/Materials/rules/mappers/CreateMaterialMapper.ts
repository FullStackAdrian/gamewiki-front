import type { CreateMaterialRequestInterface } from "../../../../../../domain/features/ZeldaBOTW/Materials/dto/requests/CreateMaterialRequestInterface";
import type { CreateMaterialResponseInterface } from "../../../../../../domain/features/ZeldaBOTW/Materials/dto/responses/CreateMaterialResponseInterface";
import type { MaterialModelInterface } from "../../../../../../domain/features/ZeldaBOTW/Materials/MaterialModelInterface";
import { BaseMapper } from "../../../../../base/BaseMapper";

export class CreateMaterialMapper extends BaseMapper<
  MaterialModelInterface,
  CreateMaterialRequestInterface,
  CreateMaterialResponseInterface
> {
  async toRequest(
    param: MaterialModelInterface | string | undefined,
  ): Promise<CreateMaterialRequestInterface> {
    if (typeof param === "string") {
      throw new Error(
        "CreateMaterialMapper toRequest do not suport Id, it only suport a complete entity of type MaterialModelInterface.",
      );
    } else if (param === undefined) {
      throw new Error(
        "CreateMaterialMapper toRequest can not be undefined param, it requires an entity for creation.",
      );
    } else {
      const ent = param as MaterialModelInterface;
      const requestBody = JSON.parse(JSON.stringify(ent));
      const request = {
        uri: "/materials/",
        body: requestBody,
      } as CreateMaterialRequestInterface;

      return request;
    }
  }

  async responseToEnt(
    response: CreateMaterialResponseInterface,
  ): Promise<MaterialModelInterface> {
    return response.data;
  }

  // this method is a formalism
  // i have to fix the issue of no implement this method in a no needed mapper
  // maybe creating every base type mapper is the best solution.
  async responseArrayToEntArray(
    response: CreateMaterialResponseInterface,
  ): Promise<MaterialModelInterface[]> {
    throw new Error(
      "No need to use this method in  create request type." + response.message,
    );
  }
}
