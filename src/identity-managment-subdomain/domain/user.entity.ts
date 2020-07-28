import { Entity } from "../infrastructrue/entity.abstractClass";
import { FullName } from "./value-objects/name.valueObject";
import { Password } from "./value-objects/password.valueObject";
import { Address } from "./value-objects/address.valueObject";
import { Email } from "./value-objects/email.valueObject";
import { MobileNumber } from "./value-objects/phoneNumber.valueObject";


export class User extends Entity {
    
    private name:FullName;
    private password:Password;
    private address:Address;
    private mobile:MobileNumber;
    private mailAddress:Email;
    
    constructor(uId?: string){
        super(uId);    
    }

    public setName(firstName: string,lastName: string): User{
        this.name = new FullName(firstName, lastName);
        return this;
    }

    public setMobile(mobile: string): User{
        this.mobile = new MobileNumber(mobile);
        return this;
    }

    public setMail(mailAddress: string): User{
        this.mailAddress = new Email(mailAddress);
        return this;
    }

    public setAddress(country: string,city: string,street: string,postalCode: string): User{
        this.address = new Address.AddressBuilder()
                            .setCountry(country).setCity(city)
                            .setStreet(street).setPostalCode(postalCode)
                            .build();
        return this;
    }

    public setPassword(password: string): User{
        this.password = new Password(password);
        return this;
    }

    public build(): User{
        return this;
    }

    register(){}
    authenticate(){}
    changePassword(){}
    changeMail(){}
    changeName(){}
    changeAddress(){}
    changeMobileNumber(){}

}