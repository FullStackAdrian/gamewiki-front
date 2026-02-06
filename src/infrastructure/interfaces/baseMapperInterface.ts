import type { BaseEntityInterface } from "./baseEntityInterface";

export interface BaseMapperInterface<TDto, TEnt extends BaseEntityInterface> {
  dtoToEntity(dto: TDto): Promise<TEnt>;

  entityToDto(entity: TEnt): Promise<TDto>;
}
