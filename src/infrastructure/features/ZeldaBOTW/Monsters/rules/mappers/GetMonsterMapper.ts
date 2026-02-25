import type { GetMonsterByIdRequestInterface } from "../../../../../../domain/features/ZeldaBOTW/Monsters/dto/requests/GetMonsterByIdRequestInterface";
import type { GetMonsterByIdResponseInterface } from "../../../../../../domain/features/ZeldaBOTW/Monsters/dto/responses/GetMonsterByIdResponseInterface";
import type { MonsterModelInterface } from "../../../../../../domain/features/ZeldaBOTW/Monsters/MonsterModelInterface";
import { BaseMapper } from "../../../../../base/BaseMapper";

export class GetMonsterMapper extends BaseMapper<
  MonsterModelInterface,
  GetMonsterByIdRequestInterface,
  GetMonsterByIdResponseInterface
> {
  async toRequest(
    ent: MonsterModelInterface
  ): Promise<GetMonsterByIdRequestInterface> {
    const request = {
      uri: `/${ent.id_num}`,
    } as GetMonsterByIdRequestInterface;

    return request;
  }
  async responseToEnt(
    response: GetMonsterByIdResponseInterface,
  ): Promise<MonsterModelInterface> {
    return response.data;
  }

  // this method is a formalism
  // i have to fix the issue of no implement this method in a no needed mapper
  // maybe creating every base type mapper is the best solution.
  async responseArrayToEntArray(
    response: GetMonsterByIdResponseInterface,
  ): Promise<MonsterModelInterface[]> {
    throw new Error(
      "No need to use this method in  get by id request type." + response.message,
    );
  }
}
