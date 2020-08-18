export interface IDataMapper<DomainModel, DTO, DataModel> {
    mapDomainModelToDto(domainModel: DomainModel): DTO;
    mapDtoToDomainModel(dto: DTO): DomainModel;
    mapDomainModelToDataModel(domainModel: DomainModel): Promise<DataModel>;
    mapDataModelToDomainModel(dataModel: DataModel): DomainModel
}