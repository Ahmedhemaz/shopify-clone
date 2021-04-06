export interface IDtoMapper<DomainModel, DTO> {
    mapDtoToDomainModel(Dto: DTO): DomainModel;
    mapDomainModelToDto(DomainModel: DomainModel): DTO;
}