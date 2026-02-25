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
    ent: MonsterModelInterface
  ): Promise<GetAllMonstersRequestInterface> {
    const request = {
      uri: `/${ent.id_num}`,
    } as GetAllMonstersRequestInterface;

    return request;
  }
  async responseToEnt(
    response: GetAllMonstersResponseInterface,
  ): Promise<MonsterModelInterface> {
    throw new Error(
      "No need to use this method in  getAll by id sest type." + response.message,
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
