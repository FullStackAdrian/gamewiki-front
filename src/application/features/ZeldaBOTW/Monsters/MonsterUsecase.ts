import type { MonsterModelInterface } from "../../../../domain/features/ZeldaBOTW/Monsters/MonsterModelInterface";
import type { MonsterServiceInterface } from "../../../../domain/features/ZeldaBOTW/Monsters/MonsterServiceInterface";
import type { MonsterUsecaseInterface } from "../../../../domain/features/ZeldaBOTW/Monsters/MonsterUsecaseInterface";

export class MonsterUsecase implements MonsterUsecaseInterface {
  private monsterService: MonsterServiceInterface;

  constructor(monsterService: MonsterServiceInterface) {
    this.monsterService = monsterService;
  }

  async createMonster(entity: MonsterModelInterface): Promise<MonsterModelInterface> {
    return this.monsterService.createMonster(entity);
  }

  async getMonsterById(id: string): Promise<MonsterModelInterface> {
    return this.monsterService.getMonsterById(id);
  }

  async getAllMonsters(): Promise<MonsterModelInterface[]> {
    return this.monsterService.getAllMonsters();
  }

  async updateMonster(entity: MonsterModelInterface): Promise<MonsterModelInterface> {
    return this.monsterService.updateMonster(entity);
  }

  async deleteMonster(id: string): Promise<void> {
    return this.monsterService.deleteMonster(id);
  }
}