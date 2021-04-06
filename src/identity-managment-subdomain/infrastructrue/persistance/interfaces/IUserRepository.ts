import { Email } from "../../../domain/value-objects/email.valueObject";
import { UniqueEntityId } from "../../../domain/value-objects/UniqueEntityId.valueObject";
import { UserDataModel } from "../models/UserDataModel";

export interface IUserRepository {
    findUserOfMail(mail: Email): UserDataModel;
    findUserOfId(userId: UniqueEntityId): UserDataModel;
    create(user: UserDataModel): void;
    update(user: UserDataModel): void;
}