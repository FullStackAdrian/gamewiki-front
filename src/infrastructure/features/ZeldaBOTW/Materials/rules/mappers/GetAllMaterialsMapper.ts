import type { GetAllMaterialsRequestInterface } from "../../../../../../domain/features/ZeldaBOTW/Materials/dto/requests/GetAllMaterialsRequestInterface";
import type { GetAllMaterialsResponseInterface } from "../../../../../../domain/features/ZeldaBOTW/Materials/dto/responses/GetAllMaterialsResponseInterface";
import type { MaterialModelInterface } from "../../../../../../domain/features/ZeldaBOTW/Materials/MaterialModelInterface";
import { BaseMapper } from "../../../../../base/BaseMapper";

export class GetAllMaterialser extends BaseMapper<
  MaterialModelInterface,
  GetAllMaterialsRequestInterface,
  GetAllMaterialsResponseInterface
> {
  async toRequest(
    param?: MaterialModelInterface | string | undefined,
  ): Promise<GetAllMaterialsRequestInterface> {
    if (typeof param === "string") {
      throw new Error(
        "GetAllMaterialsMapper do not support id for toRequest. Use undefined",
      );
      // Compare if not undefined is MaterialModelInterface so
    } else if (param !== undefined) {
      throw new Error("GetAllMaterialsMapper do not support entity for toRequest."); 
    } else {
      const request = {
        uri: `/materials`,
      } as GetAllMaterialsRequestInterface;
      return request;
    }
  }

  async responseToEnt(
    response: GetAllMaterialsResponseInterface,
  ): Promise<MaterialModelInterface> {
    throw new Error(
      "No need to use this method in  getAll by id sest type." +
        response.message,
    );
  }

  // this method is a formalism
  // i have to fix the issue of no implement this method in a no needed mapper
  // maybe creating every base type mapper is the best solution.
  async responseArrayToEntArray(
    response: GetAllMaterialsResponseInterface,
  ): Promise<MaterialModelInterface[]> {
    return response.data;
  }
}
