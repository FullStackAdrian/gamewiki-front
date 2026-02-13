import type { GetAllMonstersRequestInterface } from "../../../../../../domain/features/ZeldaBOTW/Monsters/dto/requests/GetAllMonstersRequestInterface";
import type { GetAllMonstersResponseInterface } from "../../../../../../domain/features/ZeldaBOTW/Monsters/dto/responses/GetAllMonstersResponseInterface";
import type { MonsterModel } from "../../../../../../domain/features/ZeldaBOTW/Monsters/model/MonsterModel";
import { BaseMapper } from "../../../../../base/urm/BaseMapper";

export class GetAllMonsterser extends BaseMapper<
  MonsterModel,
  GetAllMonstersRequestInterface,
  GetAllMonstersResponseInterface
> {
  async toRequest(
    ent: MonsterModel
  ): Promise<GetAllMonstersRequestInterface> {
    const request = {
      uri: `/${ent.id_num}`,
    } as GetAllMonstersRequestInterface;

    return request;
  }
  async responseToEnt(
    response: GetAllMonstersResponseInterface,
  ): Promise<MonsterModel> {
    throw new Error(
      "No need to use this method in  getAll by id sest type." + response.message,
    );
  }

  // this method is a formalism
  // i have to fix the issue of no implement this method in a no needed mapper
  // maybe creating every base type mapper is the best solution.
  async responseArrayToEntArray(
    response: GetAllMonstersResponseInterface,
  ): Promise<MonsterModel[]> {
    return response.data;
  }
}
