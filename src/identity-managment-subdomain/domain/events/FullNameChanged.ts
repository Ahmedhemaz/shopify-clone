import date from 'date-and-time';

import { IDomainEvent } from "../../../shared-kernal/interfaces/IDomainEvent";
import { UniqueEntityId } from "../value-objects/UniqueEntityId.valueObject";
import { FullName } from '../value-objects/name.valueObject';

export class FullNameChanged implements IDomainEvent{
    private date: string;
    private userId: UniqueEntityId;
    private fullName: FullName;
    constructor(userId: string, fullName: FullName){
        this.occurredOn();
        this.userId = new UniqueEntityId(userId);
        this.fullName = fullName;
    }
    occurredOn(): void {
        this.date = date.format(new Date(), 'DD/MM/YYYY HH:mm:ss');
    }
    public getOccurrenceDate(): string{
        return this.date;
    }
    public getUserId(): UniqueEntityId {
        return this.userId;
    }
    public getFullName(): FullName {
        return this.fullName;
    }
    
}