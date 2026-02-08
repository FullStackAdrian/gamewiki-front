import type { BaseEntityInterface } from "../interfaces/urm/BaseEntityInterface";

export abstract class BaseEntity implements BaseEntityInterface {
  id: string;
  constructor(id: string) {
    this.id = id;
  }
}
