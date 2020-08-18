import { Address } from '../../../../identity-managment-subdomain/domain/value-objects/address.valueObject';
import { EmptyStringException } from "../../../../identity-managment-subdomain/domain/value-objects/exceptions/emptyString.exception";
import { ErrorMessages } from '../../../../identity-managment-subdomain/domain/errors/customErrorMessagesEnum';
import { InvalidPostalCodeException } from '../../../../identity-managment-subdomain/domain/value-objects/exceptions/invalidPostalCode.exception';

describe('Address ValueObject tests', ()=>{

    const validCountry: string = 'CANADA';
    const validCity: string = 'TORONTO';
    const validStreet: string = '11 qwdafpjeoafdaf';
    const validPostalCode: string = '11865';
    const invalidPostalCode: string = '2-985';

    it('empty country string should throw EmptyStringException', ()=>{
            expect(()=> new Address('', validCity, validStreet, validPostalCode)
            ).toThrow(new EmptyStringException(ErrorMessages.EMPTY_COUNTRY));
    });

    it('empty city string should throw EmptyStringException', ()=>{
        expect(()=> new Address(validCountry, '', validStreet, validPostalCode)
        ).toThrow(new EmptyStringException(ErrorMessages.EMPTY_CITY));
    });

    it('empty street string should throw EmptyStringException', ()=>{
        expect(
            ()=> new Address(validCountry, validCity, '' ,validPostalCode)
        ).toThrow(new EmptyStringException(ErrorMessages.EMPTY_STREET));
    });

    it('empty postal code string should throw EmptyStringException', ()=>{
        expect(
            ()=> new Address(validCountry, validCity, validStreet, '')
        ).toThrow(new EmptyStringException(ErrorMessages.EMPTY_POSTAL_CODE));
    });

    it('invalid postal code should throw InvalidPostalCodeException', ()=>{
        expect(
            ()=> new Address(validCountry, validCity, validStreet, invalidPostalCode)
        ).toThrow(new InvalidPostalCodeException(ErrorMessages.INVALID_POSTAL_CODE));
    });

    it('should return true if Address1 equals Address2', ()=>{
        const address1: Address = new Address(validCountry, validCity, validStreet, validPostalCode);
        const address1Copy: Address= new Address(validCountry, validCity, validStreet, validPostalCode);
        expect(address1.equals(address1Copy)).toBe(true);
    });

})