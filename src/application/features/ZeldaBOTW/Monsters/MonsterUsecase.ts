import type { MonsterModelInterface } from "../../../../domain/features/ZeldaBOTW/Monsters/MonsterModelInterface";
import type { MonsterServiceInterface } from "../../../../domain/features/ZeldaBOTW/Monsters/MonsterServiceInterface";
import type { MonsterUsecaseInterface } from "../../../../domain/features/ZeldaBOTW/Monsters/MonsterUsecaseInterface";

export class MonsterUsecase implements MonsterUsecaseInterface {
  private monsterService: MonsterServiceInterface;

  constructor(monsterService: MonsterServiceInterface) {
    this.monsterService = monsterService;
  }

  async getNextMonsterId(): Promise<number> {
    const monsters = await this.monsterService.getAllMonsters();

    if (monsters.length === 0) {
      return 1;
    }

    const ids = monsters.map((m) => m.id_num);
    const maxId = Math.max(...ids);

    return maxId + 1;
  }

  async createMonster(entity: MonsterModelInterface): Promise<MonsterModelInterface> {
    return  await this.monsterService.createMonster(entity);
  }

  async getMonsterById(id: string): Promise<MonsterModelInterface> {
    return  await this.monsterService.getMonsterById(id);
  }

  async getAllMonsters(): Promise<MonsterModelInterface[]> {
    return  await this.monsterService.getAllMonsters();
  }

  async updateMonster(entity: MonsterModelInterface): Promise<MonsterModelInterface> {
    return  await this.monsterService.updateMonster(entity);
  }

  async deleteMonster(id: string): Promise<void> {
    return  await this.monsterService.deleteMonster(id);
  }
}
