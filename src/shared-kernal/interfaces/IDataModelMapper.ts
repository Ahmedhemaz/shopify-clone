export interface IDataModelMapper<DomainModel, DataModel> {
    mapDomainModelToDataModel(domainModel: DomainModel): Promise<DataModel>;
    mapDataModelToDomainModel(dataModel: DataModel): DomainModel
}