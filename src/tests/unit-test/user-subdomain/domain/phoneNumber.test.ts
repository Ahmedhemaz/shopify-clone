import { MobileNumber } from "../../../../user-subdomain/domain/phoneNumber.valueObject";
import { InvalidMobileNumber } from "../../../../user-subdomain/domain/errors/invalidMobileNumber.error";

describe('MobileNumber ValueObject tests', ()=> {
    const mockedMobileNumber1 = "01111861123";
    const mockedMobileNumber2 = "01111861112"
    const inValidMobileNumber = "452e555";
    it('should create mobileNumber Value Object', ()=>{
        expect(new MobileNumber(mockedMobileNumber1)).toBeInstanceOf(MobileNumber);
    });

    it('should throw invalidMobileNumber error ', ()=>{
        expect(()=> new MobileNumber(inValidMobileNumber))
        .toThrowError(new InvalidMobileNumber());
    });

    it('should return true m1 === m2', ()=> {
        const mobileNumberValueObject1 = new MobileNumber(mockedMobileNumber1);
        expect(mobileNumberValueObject1.equals(mobileNumberValueObject1)).toBe(true);
    });

    it('should return false m1 !== m2', ()=> {
        const mobileNumberValueObject1 = new MobileNumber(mockedMobileNumber1);
        const mobileNumberValueObject2 = new MobileNumber(mockedMobileNumber2);
        expect(mobileNumberValueObject1.equals(mobileNumberValueObject2)).toBe(false);
    });
})