import date from 'date-and-time';

import { IDomainEvent } from "../../../shared-kernal/interfaces/IDomainEvent";
import { UniqueEntityId } from "../value-objects/UniqueEntityId.valueObject";
import { Email } from "../value-objects/email.valueObject";

export class EmailChanged implements IDomainEvent {
    private readonly date: string;
    private readonly userId: UniqueEntityId;
    private readonly email: Email;
    constructor(userId: string, email: Email) {
        this.date = this.occurredOn();
        this.userId = new UniqueEntityId(userId);
        this.email = email;
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
    public getEmail(): Email {
        return this.email;
    }

}