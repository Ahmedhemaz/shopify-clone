import { IDomainEvent } from "../../../shared-kernal/interfaces/IDomainEvent";
import { UniqueEntityId } from "../value-objects/UniqueEntityId.valueObject";
import date from 'date-and-time';

export class PasswordChanged implements IDomainEvent{
    private date: string;
    private userId: UniqueEntityId;
    constructor(userId: string){
        this.occurredOn();
        this.userId = new UniqueEntityId(userId);
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
    
}