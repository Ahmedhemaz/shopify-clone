import { IUserRepository } from "../../interfaces/IUserRepository"
import { Email } from "../../../domain/value-objects/email.valueObject"
import { UniqueEntityId } from "../../../domain/value-objects/UniqueEntityId.valueObject"
import { injectable } from "inversify"
import { UserDataModel } from "../models/UserDataModel"
import { getConnection, getManager } from 'typeorm';
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
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into(UserDataModel)
            .values(user)
            .execute();
    }

    update(user: UserDataModel): void {

    }
}