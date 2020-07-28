import { MobileNumber } from "../../../../identity-managment-subdomain/domain/value-objects/phoneNumber.valueObject";
import { InvalidMobileNumberException } from "../../../../identity-managment-subdomain/domain/errors/invalidMobileNumber.exception";

describe('MobileNumber ValueObject tests', ()=> {
    const mockedMobileNumber1: string = "01111861123";
    const mockedMobileNumber2: string = "01111861112"
    const inValidMobileNumber: string = "452e555";
    it('should create mobileNumber Value Object', ()=>{
        expect(new MobileNumber(mockedMobileNumber1)).toBeInstanceOf(MobileNumber);
    });

    it('should throw invalidMobileNumber error ', ()=>{
        expect(()=> new MobileNumber(inValidMobileNumber))
        .toThrowError(new InvalidMobileNumberException());
    });

    it('should return true m1 === m2', ()=> {
        const mobileNumberValueObject1: MobileNumber = new MobileNumber(mockedMobileNumber1);
        expect(mobileNumberValueObject1.equals(mobileNumberValueObject1)).toBe(true);
    });

    it('should return false m1 !== m2', ()=> {
        const mobileNumberValueObject1: MobileNumber = new MobileNumber(mockedMobileNumber1);
        const mobileNumberValueObject2: MobileNumber = new MobileNumber(mockedMobileNumber2);
        expect(mobileNumberValueObject1.equals(mobileNumberValueObject2)).toBe(false);
    });
})