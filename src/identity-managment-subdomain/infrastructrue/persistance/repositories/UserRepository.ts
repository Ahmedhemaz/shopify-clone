import { IUserRepository } from "../interfaces/IUserRepository"
import { Email } from "../../../domain/value-objects/email.valueObject"
import { UniqueEntityId } from "../../../domain/value-objects/UniqueEntityId.valueObject"
import { injectable } from "inversify"
import { UserDataModel } from "../models/UserDataModel"
import { getConnection } from 'typeorm';
import { publisher } from '../../../../app';
import { UserCreated } from "../events/UserCreated"
@injectable()
export class UserRepository implements IUserRepository {

    findUserOfMail(mail: Email): UserDataModel {
        // query to find user with his mail
        return // return queried user data
    }

    findUserOfId(userId: UniqueEntityId): UserDataModel {
        return
    }

    async create(user: UserDataModel): Promise<void> {
        try {
            await getConnection()
                .createQueryBuilder()
                .insert()
                .into(UserDataModel)
                .values(user)
                .execute();

            publisher.getConnectionObject()
                .publish("[USER-CREATED]", JSON.stringify(new UserCreated(user).getCreatedUser()));

        } catch (error) {
            console.log(error);

        }

    }

    update(user: UserDataModel): void {

    }
}