import { Password } from "../../../../identity-managment-subdomain/domain/value-objects/password.valueObject";
import { StringLengthException } from "../../../../identity-managment-subdomain/domain/errors/invalidStringLength.exception";
import { ErrorMessages } from "../../../../identity-managment-subdomain/domain/errors/customErrorMessagesEnum";
import { PasswordFormatException } from "../../../../identity-managment-subdomain/domain/errors/passwordFormat.exception";

describe('Password ValueObject tests', ()=>{
    const validPassword: string = '@AsD123t';
    const invalidPasswordMinLength: string = '@A1er';
    const invalidPasswordMaxLength: string = '@G1aaaaaaaaaaaaaaaaaaaaa@T';
    const invalidPasswordFormat: string = 'passwordformat';

    it('should create password value object', ()=>{
        expect(new Password(validPassword)).toBeInstanceOf(Password);
    });

    it('should throw password length exception', ()=>{
        expect(()=> new Password(invalidPasswordMinLength))
        .toThrowError(new StringLengthException(ErrorMessages.PASSWORD_LENGTH));
    });

    it('should throw password length exception', ()=>{
        expect(()=> new Password(invalidPasswordMaxLength))
        .toThrowError(new StringLengthException(ErrorMessages.PASSWORD_LENGTH));
    });

    it('should throw password format exception', ()=>{
        expect(()=> new Password(invalidPasswordFormat))
        .toThrowError(new PasswordFormatException(ErrorMessages.INVALID_PASSWORD_FORMAT));
    });

    it('should return true when password1 equals password2', ()=>{
        const password: Password = new Password(validPassword);
        const passwordCopy: Password = new Password(validPassword);
        expect(password.equals(passwordCopy)).toBe(true);
    });



})