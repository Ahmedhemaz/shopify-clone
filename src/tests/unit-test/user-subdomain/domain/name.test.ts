import { FullName } from "../../../../user-subdomain/domain/name.valueObject";
import { EmptyStringExepction } from "../../../../user-subdomain/domain/errors/emptyString.exepction";

describe('FullName ValueObject tests', ()=> {
    const validFirstName = "foo";
    const validLastName = "bar";
    const invalidStrings = ["","     "];

    it('should create FullName ValueObject', ()=> {
        expect(new FullName(validFirstName, validLastName)).toBeInstanceOf(FullName);
    });

    test.each(invalidStrings)('should throw EmptyStringExepction', (input)=>{
        console.log(input);
        
        expect(()=> new FullName(input, validLastName))
        .toThrowError(new EmptyStringExepction());
    });

    it('should return true fullName equals fullName', ()=>{
        const fullName = new FullName(validFirstName, validLastName);
        expect(fullName.equals(fullName)).toBe(true);
    });

    it('should return false fullName not equals fullName', ()=>{
        const fullName1 = new FullName(validFirstName, validLastName);
        const fullName2 = new FullName(validLastName, validFirstName);
        expect(fullName1.equals(fullName2)).toBe(false);
    });

    it('should return firstName space lastName', ()=>{
        const fullName = new FullName(validFirstName, validLastName);
        expect(fullName.getFullName()).toStrictEqual(`${validFirstName} ${validLastName}`);      
    })

})