import type { GetMaterialByIdRequestInterface } from "../../../../../../domain/features/ZeldaBOTW/Materials/dto/requests/GetMaterialByIdRequestInterface";
import type { GetMaterialByIdResponseInterface } from "../../../../../../domain/features/ZeldaBOTW/Materials/dto/responses/GetMaterialByIdResponseInterface";
import type { MaterialModelInterface } from "../../../../../../domain/features/ZeldaBOTW/Materials/MaterialModelInterface";
import { BaseMapper } from "../../../../../base/BaseMapper";

export class GetMaterialMapper extends BaseMapper<
  MaterialModelInterface,
  GetMaterialByIdRequestInterface,
  GetMaterialByIdResponseInterface
> {
  async toRequest(
    param: MaterialModelInterface | string | undefined,
  ): Promise<GetMaterialByIdRequestInterface> {
    if (typeof param === "string") {
      const request = {
        uri: `/materials/${param}`,
      } as GetMaterialByIdRequestInterface;
      return request;
    } else if (param !== undefined) {
      throw new Error(
        "GetMaterialMapper toRequest do not suport a full entity. It requires an id. ",
      );
    } else {
      throw new Error(
        "GetMaterialMapper toRequest can not have undefined param, request requires id.",
      );
    }
  }
  async responseToEnt(
    response: GetMaterialByIdResponseInterface,
  ): Promise<MaterialModelInterface> {
    return response.data;
  }

  // this method is a formalism
  // i have to fix the issue of no implement this method in a no needed mapper
  // maybe creating every base type mapper is the best solution.
  async responseArrayToEntArray(
    response: GetMaterialByIdResponseInterface,
  ): Promise<MaterialModelInterface[]> {
    throw new Error(
      "No need to use this method in  get by id request type." +
        response.message,
    );
  }
}
