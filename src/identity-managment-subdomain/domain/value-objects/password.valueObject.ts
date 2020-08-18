import { IValueObject } from "../../../shared-kernal/interfaces/IValueObject";
import { ErrorMessages } from "../errors/customErrorMessagesEnum";
import { EmptyStringException } from "./exceptions/emptyString.exception";
import { StringLengthException } from "./exceptions/invalidStringLength.exception";
import { PasswordFormatException } from "./exceptions/passwordFormat.exception";
import isEmpty from "validator/lib/isEmpty";
import isLength from "validator/lib/isLength";

export class Password implements IValueObject<Password> {
    private readonly password: string;
    constructor(password: string) {
        if(isEmpty(password,{ignore_whitespace: true})) throw new EmptyStringException(ErrorMessages.EMPTY_PASSWORD);
        if(!isLength(password, {min:8, max:20})) throw new StringLengthException(ErrorMessages.PASSWORD_LENGTH);
        if(!this.isValidPasswordFormat(password)) throw new PasswordFormatException(ErrorMessages.INVALID_PASSWORD_FORMAT);
        this.password = password;
    };

    public equals(aPassword: Password): boolean{
        return this.password === aPassword.getPassword();
    }

    public getPassword(): string{
        return this.password;
    }

    private isValidPasswordFormat(password: string): boolean {
        return password.match(/^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/)? true: false;
    }
}