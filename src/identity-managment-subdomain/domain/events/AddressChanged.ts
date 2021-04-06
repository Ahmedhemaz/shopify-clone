import date from 'date-and-time';

import { IDomainEvent } from "../../../shared-kernal/interfaces/IDomainEvent";
import { UniqueEntityId } from "../value-objects/UniqueEntityId.valueObject";
import { Address } from '../value-objects/address.valueObject';

export class AddressChanged implements IDomainEvent {
    private readonly date: string;
    private readonly userId: UniqueEntityId;
    private readonly address: Address;
    constructor(userId: string, address: Address) {
        this.occurredOn();
        this.userId = new UniqueEntityId(userId);
        this.address = address;
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
    public getAddress(): Address {
        return this.address;
    }

}