import { IRequestBodyValidator } from "./IRequestBodyValidator";
import { UserDto } from "../../Dto/UserDto";
import { FullNameDto } from "../../Dto/FullNameDto";
import { AddressDto } from "../../Dto/AddressDto";
import { ErrorMessages } from "../../../domain/errors/customErrorMessagesEnum";
import { EmptyStringException } from "../../../domain/value-objects/exceptions/emptyString.exception";
import { InvalidPostalCodeException } from "../../../domain/value-objects/exceptions/invalidPostalCode.exception";
import { InvalidEmailException } from "../../../domain/value-objects/exceptions/invalidEmail.exception";
import { StringLengthException } from "../../../domain/value-objects/exceptions/invalidStringLength.exception";
import { PasswordFormatException } from "../../../domain/value-objects/exceptions/passwordFormat.exception";
import { InvalidMobileNumberException } from "../../../domain/value-objects/exceptions/invalidMobileNumber.exception";
import isEmpty from "validator/lib/isEmpty";
import isPostalCode from "validator/lib/isPostalCode";
import isEmail from "validator/lib/isEmail";
import isLength from "validator/lib/isLength";
import isMobilePhone from "validator/lib/isMobilePhone";
import { injectable } from "inversify";

@injectable()
export class RegisterUserRequestBodyValidator implements IRequestBodyValidator<UserDto>{

    public isRequestBodyValid(body: UserDto): boolean{
        return this.isFullNameValid(body.fullName) &&
               this.isAddressValid(body.address) &&
               this.isMailValid(body.emaill) &&
               this.isMobileValid(body.mobile) &&
               this.isPasswordValid(body.password);

    }

    private isFullNameValid(fullName: FullNameDto): boolean{
        if(isEmpty(fullName.firstName,{ignore_whitespace: true})) throw new EmptyStringException(ErrorMessages.EMPTY_FIRST_NAME);
        if(isEmpty(fullName.lastName, {ignore_whitespace: true})) throw new EmptyStringException(ErrorMessages.EMPTY_LAST_NAME);
        return true;
    }

    private isAddressValid(address: AddressDto): boolean{
        return this.isCountryValid(address.country) &&
               this.isCityValid(address.city) &&
               this.isStreetValid(address.street) &&
               this.isPostalCodeValid(address.postalCode);
    }

    private isMailValid(email: string): boolean{
        if(!isEmail(email)) throw new InvalidEmailException();
        return true;
    }

    private isMobileValid(mobile: string): boolean{
        if(!isMobilePhone(mobile)) throw new InvalidMobileNumberException();
        return true;
    }

    private isPasswordValid(password: string): boolean{
        if(isEmpty(password,{ignore_whitespace: true})) throw new EmptyStringException(ErrorMessages.EMPTY_PASSWORD);
        if(!isLength(password, {min:8})) throw new StringLengthException(ErrorMessages.PASSWORD_LENGTH);
        if(!this.isValidPasswordFormat(password)) throw new PasswordFormatException(ErrorMessages.INVALID_PASSWORD_FORMAT);
        return true;
    }
    
    private isCountryValid(country: string): boolean{
        if(isEmpty(country, {ignore_whitespace: true})) throw new EmptyStringException(ErrorMessages.EMPTY_COUNTRY);
        return true;
    }
    private isCityValid(city: string) : boolean{
        if(isEmpty(city, {ignore_whitespace: true})) throw new EmptyStringException(ErrorMessages.EMPTY_CITY);
        return true;
    }
    private isStreetValid(street: string) : boolean{
        if(isEmpty(street, {ignore_whitespace: true})) throw new EmptyStringException(ErrorMessages.EMPTY_STREET);
        return true;
    }
    private isPostalCodeValid(postalCode: string): boolean{
        if(isEmpty(postalCode,{ignore_whitespace: true})) throw new EmptyStringException(ErrorMessages.EMPTY_POSTAL_CODE);
        if(!isPostalCode(postalCode, "EE")) throw new InvalidPostalCodeException(ErrorMessages.INVALID_POSTAL_CODE);
        return true;
    }
    private isValidPasswordFormat(password: string): boolean {
        return password.match(/^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$/)? true: false;
    }
}