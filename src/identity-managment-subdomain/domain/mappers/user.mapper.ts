import 'reflect-metadata'
import { IDataModelMapper } from "../../../shared-kernal/interfaces/IDataModelMapper";
import { User } from "../user.entity";
import { UserDataModel } from "../../infrastructrue/persistance/models/UserDataModel";
import { injectable, inject } from "inversify";
import { TYPES } from "../../../shared-kernal/ioc/types";
import { IHashService } from "../interfaces/services/hashService.interface";

@injectable()
export class UserDataMapper implements IDataModelMapper<User, UserDataModel> {

    private hashingService: IHashService;
    constructor(@inject(TYPES.IHashService) hashingService: IHashService) {
        this.hashingService = hashingService;
    }

    public async mapDomainModelToDataModel(domainModel: User): Promise<UserDataModel> {
        const userDataModel: UserDataModel = new UserDataModel();
        userDataModel.uId = domainModel.getUId();
        userDataModel.firstName = domainModel.getFullName().getFirstName();
        userDataModel.lastName = domainModel.getFullName().getLastName();
        userDataModel.email = domainModel.getEmailAddress().getEmail();
        userDataModel.mobileNumber = domainModel.getMobile().getNumber();
        userDataModel.country = domainModel.getAddress().getCountry();
        userDataModel.city = domainModel.getAddress().getCity();
        userDataModel.street = domainModel.getAddress().getStreet();
        userDataModel.postalCode = domainModel.getAddress().getPostalCode();
        userDataModel.hashedPassword = await this.hashingService.hashPassword(domainModel.getPassword().getPassword());
        return userDataModel;
    }

    public mapDataModelToDomainModel(dataModel: UserDataModel): User {
        return new User.userBuilder().setUniqueId(dataModel.uId)
            .setName(dataModel.firstName, dataModel.lastName)
            .setEmail(dataModel.email)
            .setMobile(dataModel.mobileNumber)
            .setAddress(dataModel.country, dataModel.city,
                dataModel.street, dataModel.postalCode)
            .build();
    }
}