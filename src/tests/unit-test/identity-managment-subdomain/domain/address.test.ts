import { Address } from '../../../../identity-managment-subdomain/domain/value-objects/address.valueObject';
import { EmptyStringException } from "../../../../identity-managment-subdomain/domain/errors/emptyString.exception";
import { InvalidPostalCodeException } from '../../../../identity-managment-subdomain/domain/errors/invalidPostalCode.exception';
import { ErrorMessages } from '../../../../identity-managment-subdomain/domain/errors/customErrorMessagesEnum';

describe('Address ValueObject tests', ()=>{

    const validCountry: string = 'CANADA';
    const validCity: string = 'TORONTO';
    const validStreet: string = '11 qwdafpjeoafdaf';
    const validPostalCode: string = '11865';
    const invalidPostalCode: string = '2-985';

    it('empty country string should throw EmptyStringException', ()=>{
            expect(()=> new Address.AddressBuilder()
                        .setCountry('').setCity(validCity)
                        .setStreet(validStreet).setPostalCode(validPostalCode).build()
            ).toThrow(new EmptyStringException(ErrorMessages.EMPTY_COUNTRY));
    });

    it('empty city string should throw EmptyStringException', ()=>{
        expect(()=> new Address.AddressBuilder()
                    .setCountry(validCountry).setCity('')
                    .setStreet(validStreet).setPostalCode(validPostalCode).build()
        ).toThrow(new EmptyStringException(ErrorMessages.EMPTY_CITY));
    });

    it('empty street string should throw EmptyStringException', ()=>{
        expect(
            ()=> new Address.AddressBuilder()
            .setCountry(validCountry).setCity(validCity)
            .setStreet('').setPostalCode(validPostalCode).build()
        ).toThrow(new EmptyStringException(ErrorMessages.EMPTY_STREET));
    });

    it('empty postal code string should throw EmptyStringException', ()=>{
        expect(
            ()=> new Address.AddressBuilder()
            .setCountry(validCountry).setCity(validCity)
            .setStreet(validStreet).setPostalCode('').build()
        ).toThrow(new EmptyStringException(ErrorMessages.EMPTY_POSTAL_CODE));
    });

    it('invalid postal code should throw InvalidPostalCodeException', ()=>{
        expect(
            ()=> new Address.AddressBuilder()
            .setCountry(validCountry).setCity(validCity)
            .setStreet(validStreet).setPostalCode(invalidPostalCode).build()
        ).toThrow(new InvalidPostalCodeException(ErrorMessages.INVALID_POSTAL_CODE));
    });

    it('should return true if Address1 equals Address2', ()=>{
        const address1: Address = new Address.AddressBuilder()
                                    .setCountry(validCountry).setCity(validCity)
                                    .setStreet(validStreet).setPostalCode(validPostalCode).build();
        const address1Copy: Address= new Address.AddressBuilder()
                                    .setCountry(validCountry).setCity(validCity)
                                    .setStreet(validStreet).setPostalCode(validPostalCode).build();
        expect(address1.equals(address1Copy)).toBe(true);
    });

})