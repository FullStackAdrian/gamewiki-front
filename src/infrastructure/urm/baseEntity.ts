import type { baseEntitiyInterface } from "../interfaces/baseEntityInterface";

export abstract class BaseEntity implements baseEntitiyInterface{
  id: string;
  constructor(id: string) {
    this.id = id;
  }
}
