import date from 'date-and-time';

import { IDomainEvent } from "../../../shared-kernal/interfaces/IDomainEvent";
import { UniqueEntityId } from "../value-objects/UniqueEntityId.valueObject";
import { FullName } from '../value-objects/name.valueObject';

export class FullNameChanged implements IDomainEvent {
    private readonly date: string;
    private readonly userId: UniqueEntityId;
    private readonly fullName: FullName;
    constructor(userId: string, fullName: FullName) {
        this.date = this.occurredOn();
        this.userId = new UniqueEntityId(userId);
        this.fullName = fullName;
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
    public getFullName(): FullName {
        return this.fullName;
    }

}