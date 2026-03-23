import type { UpdateMonsterByIdRequestInterface } from "../../../../../../domain/features/ZeldaBOTW/Monsters/dto/requests/UpdateMonsterByIdRequestInterface";
import type { UpdateMonsterByIdResponseInterface } from "../../../../../../domain/features/ZeldaBOTW/Monsters/dto/responses/UpdateMonsterByIdResponseInterface";
import type { MonsterModelInterface } from "../../../../../../domain/features/ZeldaBOTW/Monsters/MonsterModelInterface";
import { BaseMapper } from "../../../../../base/BaseMapper";

export class UpdateMonsterMapper extends BaseMapper<
  MonsterModelInterface,
  UpdateMonsterByIdRequestInterface,
  UpdateMonsterByIdResponseInterface
> {
  async toRequest(
    param: MonsterModelInterface | string | undefined,
  ): Promise<UpdateMonsterByIdRequestInterface> {
    if (typeof param === "string") {
      throw new Error(
        "UpdateMonsterMapper toRequest do not suport just and id, it requires a full ent.",
      );
    } else if (param === undefined) {
      throw new Error(
        "UpdateMonsterMapper toRequest can not have undefined parameter, it requires a full ent.",
      );
    } else {
      const ent = param as MonsterModelInterface;
      const requestBody = JSON.parse(JSON.stringify(ent));
      const request = {
        uri: `/monsters/${ent.id_num}`,
        body: requestBody,
      } as UpdateMonsterByIdRequestInterface;

      return request;
    }
  }

  async responseToEnt(
    response: UpdateMonsterByIdResponseInterface,
  ): Promise<MonsterModelInterface> {
    return response.data;
  }

  // this method is a formalism
  // i have to fix the issue of no implement this method in a no needed mapper
  // maybe creating every base type mapper is the best solution.
  async responseArrayToEntArray(
    response: UpdateMonsterByIdResponseInterface,
  ): Promise<MonsterModelInterface[]> {
    throw new Error(
      "No need to use this method in  Update by id request type." +
        response.message,
    );
  }
}
