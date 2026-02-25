import type { DeleteMonsterByIdRequestInterface } from "../../../../../../domain/features/ZeldaBOTW/Monsters/dto/requests/DeleteMonsterByIdRequestInterface";
import type { DeleteMonsterByIdResponseInterface } from "../../../../../../domain/features/ZeldaBOTW/Monsters/dto/responses/DeleteMonsterByIdResponseInterface";
import type { MonsterModelInterface } from "../../../../../../domain/features/ZeldaBOTW/Monsters/MonsterModelInterface";
import { BaseMapper } from "../../../../../base/BaseMapper";

export class DeleteMonsterMapper extends BaseMapper<
  MonsterModelInterface,
  DeleteMonsterByIdRequestInterface,
  DeleteMonsterByIdResponseInterface
> {
  async toRequest(
    ent: MonsterModelInterface,
  ): Promise<DeleteMonsterByIdRequestInterface> {
    const request = {
      uri: `/${ent.id_num}`,
    } as DeleteMonsterByIdRequestInterface;

    return request;
  }
  async responseToEnt(
    response: DeleteMonsterByIdResponseInterface,
  ): Promise<MonsterModelInterface> {
    throw new Error(
      "No need to use this method in  Delete by id request type." + response.message,
    );
  }

  // this method is a formalism
  // i have to fix the issue of no implement this method in a no needed mapper
  // maybe creating every base type mapper is the best solution.
  async responseArrayToEntArray(
    response: DeleteMonsterByIdResponseInterface,
  ): Promise<MonsterModelInterface[]> {
    throw new Error(
      "No need to use this method in  Delete by id request type." +
        response.message,
    );
  }
}
