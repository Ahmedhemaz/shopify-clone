import { IDomainEvent } from "../../../shared-kernal/interfaces/IDomainEvent";
import { UniqueEntityId } from "../value-objects/UniqueEntityId.valueObject";
import date from 'date-and-time';

export class PasswordChanged implements IDomainEvent{
    private date: string;
    private userId: UniqueEntityId;
    private hashedPassword: string;
    constructor(userId: string, hashedPassword?: string){
        this.occurredOn();
        this.userId = new UniqueEntityId(userId);
        this.hashedPassword = hashedPassword;
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
    public getHashedPassword(): string {
        return this.hashedPassword;
    }
    
}