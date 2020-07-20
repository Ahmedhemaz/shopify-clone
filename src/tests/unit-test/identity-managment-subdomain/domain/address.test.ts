import { Address } from '../../../../identity-managment-subdomain/domain/address.valueObject';
import { EmptyStringException } from "../../../../identity-managment-subdomain/domain/errors/emptyString.exception";
import { InvalidPostalCodeException } from '../../../../identity-managment-subdomain/domain/errors/invalidPostalCode.exception';

describe('Address ValueObject tests', ()=>{

    const validCountry: string = 'CANADA';
    const validCity: string = 'TORONTO';
    const validStreet: string = '11 qwdafpjeoafdaf';
    const validPostalCode: string = '11865';
    const invalidPostalCode: string = '2-985';
    const validAddress1: Address = new Address(validCountry, validCity, validStreet, validPostalCode);

    it('empty country string should throw EmptyStringException', ()=>{
            expect(()=> new Address('', validCity, validStreet, validPostalCode))
            .toThrow(new EmptyStringException(`Country Can't be empty`));
    });

    it('empty city string should throw EmptyStringException', ()=>{
        expect(()=> new Address(validCountry, '', validStreet, validPostalCode))
        .toThrow(new EmptyStringException(`city Can't be empty`));
    });

    it('empty street string should throw EmptyStringException', ()=>{
        expect(()=> new Address(validCountry, validCity, '', validPostalCode))
        .toThrow(new EmptyStringException(`street Can't be empty`));
    });

    it('empty postal code string should throw EmptyStringException', ()=>{
        expect(()=> new Address(validCountry, validCity, validStreet, ''))
        .toThrow(new EmptyStringException(`postal Code Can't be empty`));
    });

    it('invalid postal code should throw InvalidPostalCodeException', ()=>{
        expect(()=> new Address(validCountry, validCity, validStreet, invalidPostalCode))
        .toThrow(new InvalidPostalCodeException(`invalid postal code`));
    });

    it('should return true if Address1 equals Address2', ()=>{
        const address1: Address = new Address(validCountry, validCity, validStreet, validPostalCode);
        const address1Copy: Address= new Address(validCountry, validCity, validStreet, validPostalCode);
        expect(address1.equals(address1Copy)).toBe(true);
    });

    it('can not modify object properties', ()=>{
        const address1: Address = new Address(validCountry, validCity, validStreet, validPostalCode);
        expect(()=>address1['setCity']('sssss')).toThrowError();
    });

})