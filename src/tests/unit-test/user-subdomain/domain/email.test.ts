import { Email } from "../../../../user-subdomain/domain/email.valueObject";
import { InvalidEmail } from "../../../../user-subdomain/domain/errors/invalidEmail.error";

describe(' Email ValueObject tests ', ()=>{
    const validEmailMock1 = "foo.bar@gmail.com";
    const validEmailMock2 = "bar.foo@gmail.com";
    const invalidEmailMocks = ["fooBar.com","  "," foobar@gmail.com"];

    it('should create email ValueObject', ()=>{
        expect(new Email(validEmailMock1)).toBeInstanceOf(Email);
    });

    test.each(invalidEmailMocks)('should throw invalidEmail error', (input)=>{
        expect(()=> new Email(input))
        .toThrowError(new InvalidEmail());
    })

    it('should return true mail1 equals mail2', ()=>{
        const emailValueObject = new Email(validEmailMock1);
        expect(emailValueObject.equals(emailValueObject)).toBe(true);
    });

    it('should return false mail1 not equals mail2', ()=> {
        const emailValueObject1 = new Email(validEmailMock1);
        const emailValueObject2 = new Email(validEmailMock2);
        expect(emailValueObject1.equals(emailValueObject2)).toBe(false);``
    })
})