import date from 'date-and-time';

import { IDomainEvent } from "../../../shared-kernal/interfaces/IDomainEvent";
import { UniqueEntityId } from "../value-objects/UniqueEntityId.valueObject";
import { MobileNumber } from '../value-objects/phoneNumber.valueObject';

export class MobileNumberchanged implements IDomainEvent {
    private readonly date: string;
    private readonly userId: UniqueEntityId;
    private readonly mobileNumber: MobileNumber;
    constructor(userId: string, mobileNumber: MobileNumber) {
        this.date = this.occurredOn();
        this.userId = new UniqueEntityId(userId);
        this.mobileNumber = mobileNumber;
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
    public getMobileNumber(): MobileNumber {
        return this.mobileNumber;
    }

}