import { IUserRepository } from "../../interfaces/IUserRepository"
import { Email } from "../../../domain/value-objects/email.valueObject"
import { UniqueEntityId } from "../../../domain/value-objects/UniqueEntityId.valueObject"
import { User } from "../../../domain/user.entity"
import { injectable } from "inversify"
import { UserDataModel } from "../models/UserDataModel"
@injectable()
export class UserRepository implements IUserRepository {

    findUserOfMail(mail: Email): UserDataModel{
        // query to find user with his mail
        return // return queried user data
    }

    findUserOfId(userId: UniqueEntityId): UserDataModel {
        return
    }

    create(usesr: UserDataModel): void{
        return
    }

    update(user: UserDataModel): void{

    }
}