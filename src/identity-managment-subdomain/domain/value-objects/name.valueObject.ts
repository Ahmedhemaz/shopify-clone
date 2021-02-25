import { IValueObject } from "../../../shared-kernal/interfaces/IValueObject";
import { EmptyStringException } from "./exceptions/emptyString.exception";
import isEmpty from 'validator/lib/isEmpty';
import { ErrorMessages } from "../errors/customErrorMessagesEnum";
export class FullName implements IValueObject<FullName> {

    private readonly firstName: string;
    private readonly lastName: string;

    constructor(firstName: string, lastName: string) {
        firstName.trim();
        lastName.trim();
        if (isEmpty(firstName, { ignore_whitespace: true })) throw new EmptyStringException(ErrorMessages.EMPTY_FIRST_NAME);
        if (isEmpty(lastName, { ignore_whitespace: true })) throw new EmptyStringException(ErrorMessages.EMPTY_LAST_NAME);

        this.firstName = firstName;
        this.lastName = lastName;
    }

    public equals(fullName: FullName): boolean {
        if (!fullName && fullName.constructor !== this.constructor) return false;
        return (this.firstName == fullName.getFirstName()) && (this.lastName === fullName.getLastName());
    }

    public getFirstName(): Readonly<string> { return this.firstName; }
    public getLastName(): Readonly<string> { return this.lastName; }
    public getFullName(): Readonly<string> { return `${this.firstName} ${this.lastName}`; }

}