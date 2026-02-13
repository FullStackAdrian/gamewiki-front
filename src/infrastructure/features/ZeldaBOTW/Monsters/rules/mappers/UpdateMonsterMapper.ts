import type { UpdateMonsterByIdRequestInterface } from "../../../../../../domain/features/ZeldaBOTW/Monsters/dto/requests/UpdateMonsterByIdRequestInterface";
import type { UpdateMonsterByIdResponseInterface } from "../../../../../../domain/features/ZeldaBOTW/Monsters/dto/responses/UpdateMonsterByIdResponseInterface";
import type { MonsterModel } from "../../../../../../domain/features/ZeldaBOTW/Monsters/model/MonsterModel";
import { BaseMapper } from "../../../../../base/urm/BaseMapper";

export class UpdateMonsterMapper extends BaseMapper<
  MonsterModel,
  UpdateMonsterByIdRequestInterface,
  UpdateMonsterByIdResponseInterface
> {
  async toRequest(
    ent: MonsterModel
  ): Promise<UpdateMonsterByIdRequestInterface> {
    const JSONent: JSON = JSON.parse(JSON.stringify(ent));
    const request = {
      uri: `/${ent.id_num}`,
      body: JSONent
    } as UpdateMonsterByIdRequestInterface;

    return request;
  }
  async responseToEnt(
    response: UpdateMonsterByIdResponseInterface,
  ): Promise<MonsterModel> {
    return response.data;
  }

  // this method is a formalism
  // i have to fix the issue of no implement this method in a no needed mapper
  // maybe creating every base type mapper is the best solution.
  async responseArrayToEntArray(
    response: UpdateMonsterByIdResponseInterface,
  ): Promise<MonsterModel[]> {
    throw new Error(
      "No need to use this method in  Update by id request type." + response.message,
    );
  }
}
