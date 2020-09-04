import { Email } from "../../../../../identity-managment-subdomain/domain/value-objects/email.valueObject";
import { InvalidEmailException } from "../../../../../identity-managment-subdomain/domain/value-objects/exceptions/invalidEmail.exception";

describe(' Email ValueObject tests ', ()=>{
    const validEmailMock1: string = "foo.bar@gmail.com";
    const validEmailMock2: string = "bar.foo@gmail.com";
    const invalidEmailMocks: Array<string> = ["fooBar.com","  "," foobar@gmail.com"];

    it('should create email ValueObject', ()=>{
        expect(new Email(validEmailMock1)).toBeInstanceOf(Email);
    });

    test.each(invalidEmailMocks)('should throw invalidEmail error', (input)=>{
        expect(()=> new Email(input))
        .toThrowError(new InvalidEmailException());
    })

    it('should return true mail1 equals mail2', ()=>{
        const emailValueObject: Email = new Email(validEmailMock1);
        expect(emailValueObject.equals(emailValueObject)).toBe(true);
    });

    it('should return false mail1 not equals mail2', ()=> {
        const emailValueObject1: Email = new Email(validEmailMock1);
        const emailValueObject2: Email = new Email(validEmailMock2);
        expect(emailValueObject1.equals(emailValueObject2)).toBe(false);
    });
})