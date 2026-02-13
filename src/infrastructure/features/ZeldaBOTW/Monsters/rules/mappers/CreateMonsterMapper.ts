import type { CreateMonsterRequestInterface } from "../../../../../../domain/features/ZeldaBOTW/Monsters/dto/requests/CreateMonsterRequestInterface";
import type { CreateMonsterResponseInterface } from "../../../../../../domain/features/ZeldaBOTW/Monsters/dto/responses/CreateMonsterResponseInterface";
import type { MonsterModel } from "../../../../../../domain/features/ZeldaBOTW/Monsters/model/MonsterModel";
import { BaseMapper } from "../../../../../base/urm/BaseMapper";

export class CreateMonsterMapper extends BaseMapper<
  MonsterModel,
  CreateMonsterRequestInterface,
  CreateMonsterResponseInterface
> {
  async toRequest(
    ent: MonsterModel,
  ): Promise<CreateMonsterRequestInterface> {
    const JSONent: JSON = JSON.parse(JSON.stringify(ent));
    const request = {
      uri: "/",
      body: JSONent,
    } as CreateMonsterRequestInterface;

    return request;
  }
  async responseToEnt(
    response: CreateMonsterResponseInterface,
  ): Promise<MonsterModel> {
    return response.data;
  }

  // this method is a formalism
  // i have to fix the issue of no implement this method in a no needed mapper
  // maybe creating every base type mapper is the best solution.
  async responseArrayToEntArray(
    response: CreateMonsterResponseInterface,
  ): Promise<MonsterModel[]> {
    throw new Error("No need to use this method in  create request type." + response.message);
  }
}
