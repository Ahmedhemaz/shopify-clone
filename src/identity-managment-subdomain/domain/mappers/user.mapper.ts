import 'reflect-metadata'
import { IDataModelMapper } from "../../../shared-kernal/interfaces/IDataModelMapper";
import { User } from "../user.entity";
import { UserDataModel } from "../../infrastructrue/persistance/models/UserDataModel";
import { injectable, inject } from "inversify";
import { TYPES } from "../../../shared-kernal/ioc/types";
import { IHashService } from "../interfaces/services/hashService.interface";
import { FullName } from "../value-objects/name.valueObject";
import { FullNameDataModel } from "../../infrastructrue/persistance/models/FullNameDataModel";
import { Address } from "../value-objects/address.valueObject";
import { AddressDataModel } from "../../infrastructrue/persistance/models/AddressDataModel";

@injectable()
export class UserDataMapper implements IDataModelMapper<User,UserDataModel> {
    
    private hashingService: IHashService;
    constructor(@inject(TYPES.IHashService) hashingService:IHashService){
        this.hashingService = hashingService;
    }

    public async mapDomainModelToDataModel(domainModel: User): Promise<UserDataModel> {
        const userDataModel: UserDataModel = new UserDataModel();
        userDataModel.uId =  domainModel.getUId();
        userDataModel.name = this.mapDomainModelFullNameToDataModelFullName(domainModel.getFullName());
        userDataModel.email = domainModel.getEmailAddress().getEmail();
        userDataModel.mobileNumber = domainModel.getMobile().getNumber();
        userDataModel.address = this.mapDomainModelAddressToDataModelAddress(domainModel.getAddress());
        userDataModel.hashedPassword = await this.hashingService.hashPassword(domainModel.getPassword().getPassword());
        return userDataModel;
    }

    public mapDataModelToDomainModel(dataModel: UserDataModel): User {
        return new User.userBuilder().setUniqueId(dataModel.uId)
                                     .setName(dataModel.name.firstName, dataModel.name.lastName)
                                     .setEmail(dataModel.email)
                                     .setMobile(dataModel.mobileNumber)
                                     .setAddress(dataModel.address.country, dataModel.address.city,
                                                 dataModel.address.street, dataModel.address.postalCode)
                                     .build();
    }

    private mapDomainModelFullNameToDataModelFullName(domainModelFullName: FullName): FullNameDataModel{
        const fullNameDataModel = new FullNameDataModel();
        fullNameDataModel.firstName = domainModelFullName.getFirstName();
        fullNameDataModel.lastName = domainModelFullName.getLastName();
        return fullNameDataModel;
    }

    private mapDomainModelAddressToDataModelAddress(domainModelAddress: Address): AddressDataModel{
        const addressDataModel = new AddressDataModel();
        addressDataModel.country = domainModelAddress.getCountry();
        addressDataModel.city = domainModelAddress.getCity();
        addressDataModel.street = domainModelAddress.getStreet();
        addressDataModel.postalCode = domainModelAddress.getPostalCode();
        return addressDataModel;
    }

}