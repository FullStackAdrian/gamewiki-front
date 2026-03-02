import type { GetAllMonstersRequestInterface } from "../../../../../../domain/features/ZeldaBOTW/Monsters/dto/requests/GetAllMonstersRequestInterface";
import type { GetAllMonstersResponseInterface } from "../../../../../../domain/features/ZeldaBOTW/Monsters/dto/responses/GetAllMonstersResponseInterface";
import type { MonsterModelInterface } from "../../../../../../domain/features/ZeldaBOTW/Monsters/MonsterModelInterface";
import { BaseMapper } from "../../../../../base/BaseMapper";

export class GetAllMonsterser extends BaseMapper<
  MonsterModelInterface,
  GetAllMonstersRequestInterface,
  GetAllMonstersResponseInterface
> {
  async toRequest(
    param?: MonsterModelInterface | string | undefined,
  ): Promise<GetAllMonstersRequestInterface> {
    if (typeof param === "string") {
      throw new Error(
        "GetAllMonstersMapper do not support id for toRequest. Use undefined",
      );
      // Compare if not undefined is MonsterModelInterface so
    } else if (param !== undefined) {
      throw new Error("GetAllMonstersMapper do not support entity for toRequest."); 
    } else {
      const request = {
        uri: `/monsters`,
      } as GetAllMonstersRequestInterface;
      return request;
    }
  }

  async responseToEnt(
    response: GetAllMonstersResponseInterface,
  ): Promise<MonsterModelInterface> {
    throw new Error(
      "No need to use this method in  getAll by id sest type." +
        response.message,
    );
  }

  // this method is a formalism
  // i have to fix the issue of no implement this method in a no needed mapper
  // maybe creating every base type mapper is the best solution.
  async responseArrayToEntArray(
    response: GetAllMonstersResponseInterface,
  ): Promise<MonsterModelInterface[]> {
    return response.data;
  }
}
