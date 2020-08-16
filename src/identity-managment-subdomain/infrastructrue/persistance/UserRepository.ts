import { IUserRepository } from "../interfaces/IUserRepository"
import { Email } from "../../domain/value-objects/email.valueObject"
import { UniqueEntityId } from "../../domain/value-objects/UniqueEntityId.valueObject"
import { User } from "../../domain/user.entity"

export class UserRepository implements IUserRepository {

    findUserOfMail(mail: Email): User{
        // query to find user with his mail
        return // return queried user data
    }

    findUserOfId(userId: UniqueEntityId): User {
        return
    }

    create(usesr: User): void{
        return
    }

    update(user: User): void{

    }
}