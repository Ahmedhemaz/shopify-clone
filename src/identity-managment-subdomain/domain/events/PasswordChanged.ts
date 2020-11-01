import { IDomainEvent } from "../../../shared-kernal/interfaces/IDomainEvent";
import { UniqueEntityId } from "../value-objects/UniqueEntityId.valueObject";
import date from 'date-and-time';

export class PasswordChanged implements IDomainEvent {
    private readonly date: string;
    private readonly userId: UniqueEntityId;
    private readonly hashedPassword: string;
    constructor(userId: string, hashedPassword?: string) {
        this.date = this.occurredOn();
        this.userId = new UniqueEntityId(userId);
        this.hashedPassword = hashedPassword;
    }
    occurredOn(): string {
        return date.format(new Date(), 'DD/MM/YYYY HH:mm:ss');
    }
    public getOccurrenceDate(): string {
        return this.date;
    }
    public getUserId(): UniqueEntityId {
        return this.userId;
    }
    public getHashedPassword(): string {
        return this.hashedPassword;
    }

}