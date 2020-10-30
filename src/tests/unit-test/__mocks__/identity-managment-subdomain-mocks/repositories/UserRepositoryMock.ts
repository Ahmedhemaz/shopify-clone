import { IUserRepository } from "../../../../../identity-managment-subdomain/infrastructrue/interfaces/IUserRepository";
import { Email } from "../../../../../identity-managment-subdomain/domain/value-objects/email.valueObject";
import { UniqueEntityId } from "../../../../../identity-managment-subdomain/domain/value-objects/UniqueEntityId.valueObject";
import { UserDataModel } from "../../../../../identity-managment-subdomain/infrastructrue/persistance/models/UserDataModel";

export class UserRepositoryMock implements IUserRepository {

    private mockedUserData: UserDataModel;
    constructor() {
        this.mockedUserData = new UserDataModel()
    }
    findUserOfMail(mail: Email): UserDataModel {
        return this.mockedUserData;
    }
    findUserOfId(userId: UniqueEntityId): UserDataModel {
        throw new Error("Method not implemented.");
    }
    create(user: UserDataModel): void {
        throw new Error("Method not implemented.");
    }
    update(user: UserDataModel): void {
        throw new Error("Method not implemented.");
    }

}