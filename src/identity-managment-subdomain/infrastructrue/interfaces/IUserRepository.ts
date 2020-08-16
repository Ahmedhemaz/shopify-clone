import { Email } from "../../domain/value-objects/email.valueObject";
import { User } from "../../domain/user.entity";
import { UniqueEntityId } from "../../domain/value-objects/UniqueEntityId.valueObject";

export interface IUserRepository {
    findUserOfMail(mail: Email): User;
    findUserOfId(userId: UniqueEntityId): User;
    create(user: User): void;
    update(user: User): void;
}