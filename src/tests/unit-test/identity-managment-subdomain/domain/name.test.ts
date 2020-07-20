import { FullName } from "../../../../identity-managment-subdomain/domain/name.valueObject";
import { EmptyStringException } from "../../../../identity-managment-subdomain/domain/errors/emptyString.exception";

describe('FullName ValueObject tests', ()=> {
    const validFirstName: string = "foo";
    const validLastName: string = "bar";
    const invalidStrings: Array<string> = ["","     "];

    it('should create FullName ValueObject', ()=> {
        expect(new FullName(validFirstName, validLastName)).toBeInstanceOf(FullName);
    });

    test.each(invalidStrings)('first name should throw EmptyStringExepction', (input)=>{
        expect(()=> new FullName(input, validLastName))
        .toThrowError(new EmptyStringException(`first Name Can't be empty`));
    });

    test.each(invalidStrings)('last name should throw EmptyStringExepction', (input)=>{
        expect(()=> new FullName(validFirstName, input))
        .toThrowError(new EmptyStringException(`last Name Can't be empty`));
    });

    it('should return true fullName equals fullName', ()=>{
        const fullName: FullName = new FullName(validFirstName, validLastName);
        const fullNameCopy: FullName = new FullName(validFirstName, validLastName);
        expect(fullName.equals(fullNameCopy)).toBe(true);
    });

    it('should return false fullName not equals fullName', ()=>{
        const fullName1: FullName = new FullName(validFirstName, validLastName);
        const fullName2: FullName = new FullName(validLastName, validFirstName);
        expect(fullName1.equals(fullName2)).toBe(false);
    });

    it('should return firstName space lastName', ()=>{
        const fullName: FullName = new FullName(validFirstName, validLastName);
        expect(fullName.getFullName()).toStrictEqual(`${validFirstName} ${validLastName}`);      
    });

})