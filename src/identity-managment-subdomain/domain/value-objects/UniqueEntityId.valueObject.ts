import { IValueObject } from "../../../shared-kernal/interfaces/IValueObject";
import { InvalidUniqueIdentityException } from './exceptions/invalidUniqueIdentity.exception';
import { ErrorMessages } from '../errors/customErrorMessagesEnum';
import { v4 as uuidv4 } from 'uuid';
import isUUID from 'validator/lib/isUUID';

export class UniqueEntityId implements IValueObject<UniqueEntityId> {

    private uniqueIdentity: string;
    constructor(uniqueIdentity?: string) {
        if (uniqueIdentity) {
            this.setUniqueIdentity(uniqueIdentity);
        } else {
            this.setUniqueIdentityWithRandomUUID();
        }
        Object.freeze(this);
    }

    equals(anUniqueEntityIdentity: UniqueEntityId): boolean {
        return this.uniqueIdentity === anUniqueEntityIdentity.getUniqueIdentity();
    }

    public getUniqueIdentity(): string {
        return this.uniqueIdentity
    }

    private setUniqueIdentity(anUniqueIdentity: string) {
        if (!isUUID(anUniqueIdentity, '4')) throw new InvalidUniqueIdentityException(ErrorMessages.INVALID_UUID_V4);
        this.uniqueIdentity = anUniqueIdentity;
    }

    private setUniqueIdentityWithRandomUUID() {
        this.uniqueIdentity = uuidv4();
    }

}