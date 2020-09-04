import { RegisterUserRequestBodyValidator } from "../../../../../../identity-managment-subdomain/application/validators/request-body-validators/RegisterUserRequestBodyValidator"
import { UserDtoMock } from "../../../../__mocks__/identity-managment-subdomain-mocks/application/Dto/UserDtoMock";
import { EmptyStringException } from "../../../../../../identity-managment-subdomain/domain/value-objects/exceptions/emptyString.exception";
import { ErrorMessages } from "../../../../../../identity-managment-subdomain/domain/errors/customErrorMessagesEnum";
import { InvalidPostalCodeException } from "../../../../../../identity-managment-subdomain/domain/value-objects/exceptions/invalidPostalCode.exception";
import { InvalidEmailException } from "../../../../../../identity-managment-subdomain/domain/value-objects/exceptions/invalidEmail.exception";
import { StringLengthException } from "../../../../../../identity-managment-subdomain/domain/value-objects/exceptions/invalidStringLength.exception";
import { PasswordFormatException } from "../../../../../../identity-managment-subdomain/domain/value-objects/exceptions/passwordFormat.exception";
import { InvalidMobileNumberException } from "../../../../../../identity-managment-subdomain/domain/value-objects/exceptions/invalidMobileNumber.exception";

describe('RegisterUserRequestBodyValidator tests', ()=>{
    const registerUserRequestBodyValidator: RegisterUserRequestBodyValidator = new RegisterUserRequestBodyValidator();
    let userDtoMock: UserDtoMock;
    beforeEach(()=>{
        userDtoMock = new UserDtoMock();
    })
    it('should be valid userDto', ()=>{
        expect(registerUserRequestBodyValidator.isRequestBodyValid(userDtoMock)).toBe(true);
    });

    /** fullName tests */
    it('should throw EmptyStringException with firstname cant be empty', ()=>{
        expect(()=> registerUserRequestBodyValidator.isRequestBodyValid(userDtoMock.getUserDtoWithEmptyFirstName()))
        .toThrowError(new EmptyStringException(ErrorMessages.EMPTY_FIRST_NAME));
    });

    it('should throw EmptyStringException with lastname cant be empty', ()=>{
        expect(()=> registerUserRequestBodyValidator.isRequestBodyValid(userDtoMock.getUserDtoWithEmptyLastName()))
        .toThrowError(new EmptyStringException(ErrorMessages.EMPTY_LAST_NAME));
    });

    /**Address tests */
    it('should throw EmptyStringException with country cant be empty', ()=>{
        expect(()=> registerUserRequestBodyValidator.isRequestBodyValid(userDtoMock.getUserDtoWithEmptyCountry()))
        .toThrowError(new EmptyStringException(ErrorMessages.EMPTY_COUNTRY));
    });

    it('should throw EmptyStringException with city cant be empty', ()=>{
        expect(()=> registerUserRequestBodyValidator.isRequestBodyValid(userDtoMock.getUserDtoWithEmptyCity()))
        .toThrowError(new EmptyStringException(ErrorMessages.EMPTY_CITY));
    });

    it('should throw EmptyStringException with street cant be empty', ()=>{
        expect(()=> registerUserRequestBodyValidator.isRequestBodyValid(userDtoMock.getUserDtoWithEmptyStreet()))
        .toThrowError(new EmptyStringException(ErrorMessages.EMPTY_STREET));
    });

    it('should throw EmptyStringException with postalcode cant be empty', ()=>{
        expect(()=> registerUserRequestBodyValidator.isRequestBodyValid(userDtoMock.getUserDtoWithEmptyPostalCode()))
        .toThrowError(new EmptyStringException(ErrorMessages.EMPTY_POSTAL_CODE));
    });

    it('should throw InvalidPostalCodeException with invalid postalcode ', ()=>{
        expect(()=> registerUserRequestBodyValidator.isRequestBodyValid(userDtoMock.getUserDtoWithInvalidPostalCode()))
        .toThrowError(new InvalidPostalCodeException(ErrorMessages.INVALID_POSTAL_CODE));
    });

    /** email tests */
    it('should throw EmptyStringException with email cant be empty', ()=>{
        expect(()=> registerUserRequestBodyValidator.isRequestBodyValid(userDtoMock.getUserDtoWithEmptyEmail()))
        .toThrowError(new EmptyStringException(ErrorMessages.EMPTY_EMAIL));
    });

    it('should throw InvalidEmailException with invalid email ', ()=>{
        expect(()=> registerUserRequestBodyValidator.isRequestBodyValid(userDtoMock.getUserDtoWithInvalidEmail()))
        .toThrowError(new InvalidEmailException());
    });

    /** password tests */

    it('should throw EmptyStringException with password cant be empty', ()=>{
        expect(()=> registerUserRequestBodyValidator.isRequestBodyValid(userDtoMock.getUserDtoWithEmptyPassword()))
        .toThrowError(new EmptyStringException(ErrorMessages.EMPTY_PASSWORD));
    });

    it('should throw InvalidEmailException with invalid password min length ', ()=>{
        expect(()=> registerUserRequestBodyValidator.isRequestBodyValid(userDtoMock.getUserDtoWithInvalidPasswordMinLength()))
        .toThrowError(new StringLengthException(ErrorMessages.PASSWORD_LENGTH));
    });
    
    it('should throw PasswordFormatException with invalid password format ', ()=>{
        expect(()=> registerUserRequestBodyValidator.isRequestBodyValid(userDtoMock.getUserDtoWithInvalidPasswordFormat()))
        .toThrowError(new PasswordFormatException(ErrorMessages.INVALID_PASSWORD_FORMAT));
    });

    /** mobile tests */

    it('should throw EmptyStringException with mobile cant be empty', ()=>{
        expect(()=> registerUserRequestBodyValidator.isRequestBodyValid(userDtoMock.getUserDtoWithEmptyMobile()))
        .toThrowError(new EmptyStringException(ErrorMessages.EMPTY_MOBILE));
    });

    it('should throw InvalidMobileNumberException with invalid mobile number ', ()=>{
        expect(()=> registerUserRequestBodyValidator.isRequestBodyValid(userDtoMock.getUserDtoWithInvalidMobile()))
        .toThrowError(new InvalidMobileNumberException());
    });

})