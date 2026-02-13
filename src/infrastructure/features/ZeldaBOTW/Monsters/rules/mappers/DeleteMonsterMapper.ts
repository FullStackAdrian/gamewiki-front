import type { DeleteMonsterByIdRequestInterface } from "../../../../../../domain/features/ZeldaBOTW/Monsters/dto/requests/DeleteMonsterByIdRequestInterface";
import type { DeleteMonsterByIdResponseInterface } from "../../../../../../domain/features/ZeldaBOTW/Monsters/dto/responses/DeleteMonsterByIdResponseInterface";
import type { MonsterModel } from "../../../../../../domain/features/ZeldaBOTW/Monsters/model/MonsterModel";
import { BaseMapper } from "../../../../../base/urm/BaseMapper";

export class DeleteMonsterMapper extends BaseMapper<
  MonsterModel,
  DeleteMonsterByIdRequestInterface,
  DeleteMonsterByIdResponseInterface
> {
  async toRequest(
    ent: MonsterModel,
  ): Promise<DeleteMonsterByIdRequestInterface> {
    const request = {
      uri: `/${ent.id_num}`,
    } as DeleteMonsterByIdRequestInterface;

    return request;
  }
  async responseToEnt(
    response: DeleteMonsterByIdResponseInterface,
  ): Promise<MonsterModel> {
    throw new Error(
      "No need to use this method in  Delete by id request type." + response.message,
    );
  }

  // this method is a formalism
  // i have to fix the issue of no implement this method in a no needed mapper
  // maybe creating every base type mapper is the best solution.
  async responseArrayToEntArray(
    response: DeleteMonsterByIdResponseInterface,
  ): Promise<MonsterModel[]> {
    throw new Error(
      "No need to use this method in  Delete by id request type." +
        response.message,
    );
  }
}
