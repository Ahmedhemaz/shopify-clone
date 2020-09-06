import { IRequestBodyValidator } from "../../../../../../../identity-managment-subdomain/application/validators/request-body-validators/IRequestBodyValidator";
import { UserDtoMock } from "../../Dto/UserDtoMock";
import { EmptyStringException } from "../../../../../../../identity-managment-subdomain/domain/value-objects/exceptions/emptyString.exception";
import { ErrorMessages } from "../../../../../../../identity-managment-subdomain/domain/errors/customErrorMessagesEnum";

export class RegisterUserRequestBodyValidatorMock implements IRequestBodyValidator<UserDtoMock> {
    isRequestBodyValid(body: UserDtoMock): boolean {
        if(!body.fullName.firstName) throw new EmptyStringException(ErrorMessages.EMPTY_FIRST_NAME);
        return true;
    }
}