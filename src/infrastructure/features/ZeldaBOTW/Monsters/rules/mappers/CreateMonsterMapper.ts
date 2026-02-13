import type { CreateMonsterRequestInterface } from "../../../../../../domain/features/ZeldaBOTW/Monsters/dto/requests/CreateMonsterRequestInterface";
import type { CreateMonsterResponseInterface } from "../../../../../../domain/features/ZeldaBOTW/Monsters/dto/responses/CreateMonsterResponseInterface";
import type { MonsterModel } from "../../../../../../domain/features/ZeldaBOTW/Monsters/model/MonsterModel";
import { BaseMapper } from "../../../../../base/urm/BaseMapper";

export class CreateMonsterMapper extends BaseMapper<
  MonsterModel,
  CreateMonsterRequestInterface,
  CreateMonsterResponseInterface
> {
  entToRequest(ent: MonsterModel): Promise<CreateMonsterRequestInterface> {
    throw new Error("Method not implemented.");
  }
  responseToEnt(response: CreateMonsterResponseInterface): Promise<MonsterModel> {
    throw new Error("Method not implemented.");
  }
  // this method is a formalism, i have to fix the issue of no implement this method in a no needed mapper 
  // maybe creating every base type mapper is the best solution. 
  responseArrayToEntArray(response: CreateMonsterResponseInterface): Promise<MonsterModel[]> {
    throw new Error("No need to use this method in  create request type.");
  }
}
