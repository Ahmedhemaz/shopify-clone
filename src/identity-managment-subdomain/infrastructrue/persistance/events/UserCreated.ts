import date from 'date-and-time';

import { IDomainEvent } from "../../../../shared-kernal/interfaces/IDomainEvent";
import { UserDataModel } from '../models/UserDataModel';

export class UserCreated implements IDomainEvent {

    private readonly date: string;
    private readonly createdUser: UserDataModel;

    constructor(createdUser: UserDataModel) {
        this.date = this.occurredOn();
        this.createdUser = createdUser;
    }

    occurredOn(): string {
        return date.format(new Date(), 'DD/MM/YYYY HH:mm:ss');
    }

    public getOccurrenceDate(): string {
        return this.date;
    }

    public getCreatedUser(): UserDataModel {
        return this.createdUser;
    }

}