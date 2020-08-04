import { Entity } from "../infrastructrue/entity.abstractClass";
import { FullName } from "./value-objects/name.valueObject";
import { Password } from "./value-objects/password.valueObject";
import { Address } from "./value-objects/address.valueObject";
import { Email } from "./value-objects/email.valueObject";
import { MobileNumber } from "./value-objects/phoneNumber.valueObject";
import { UserBuilder } from "./interfaces/builders/UserBuilder.interface";


export class User extends Entity {
    
    private name:FullName;
    private password:Password;
    private address:Address;
    private mobile:MobileNumber;
    private mailAddress:Email;
    
    constructor(userBuilder: UserBuilder,uId?: string){
        super(uId);    
        this.name = userBuilder.getName();
        this.password = userBuilder.getPassword();
        this.address = userBuilder.getAddress();
        this.mobile = userBuilder.getMobile();
        this.mailAddress = userBuilder.getMailAddress();
    }

    static userBuilder = class UserBuilder{
        private name:FullName;
        private password:Password;
        private address:Address;
        private mobile:MobileNumber;
        private mailAddress:Email;
        constructor(){}

        public setName(firstName: string,lastName: string): UserBuilder{
            this.name = new FullName(firstName, lastName);
            return this;
        }
    
        public setMobile(mobile: string): UserBuilder{
            this.mobile = new MobileNumber(mobile);
            return this;
        }
    
        public setMail(mailAddress: string): UserBuilder{
            this.mailAddress = new Email(mailAddress);
            return this;
        }
    
        public setAddress(country: string,city: string,street: string,postalCode: string): UserBuilder{
            this.address = new Address.AddressBuilder()
                                .setCountry(country).setCity(city)
                                .setStreet(street).setPostalCode(postalCode)
                                .build();
            return this;
        }
    
        public setPassword(password: string): UserBuilder{
            this.password = new Password(password);
            return this;
        }
    
        public build(): User{
            return new User(this);
        }

        public getName(): FullName{
            return this.name;
        }
        public getMobile(): MobileNumber{
            return this.mobile;
        }
        public getMailAddress(): Email{
            return this.mailAddress;
        }
        public getAddress(): Address{
            return this.address;
        }
        public getPassword(): Password{
            return this.password;
        }
    }

    changePassword(){}
    changeMail(){}
    changeName(){}
    changeAddress(){}
    changeMobileNumber(){}

}