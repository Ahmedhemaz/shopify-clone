import { Entity } from "../../shared-kernal/abstract/entity.abstractClass";
import { UserBuilder } from "./interfaces/builders/UserBuilder.interface";
import { FullName } from "./value-objects/name.valueObject";
import { Password } from "./value-objects/password.valueObject";
import { Address } from "./value-objects/address.valueObject";
import { Email } from "./value-objects/email.valueObject";
import { MobileNumber } from "./value-objects/phoneNumber.valueObject";
import { UniqueEntityId } from "./value-objects/UniqueEntityId.valueObject";
import { UserEventEmitter } from "./events/userEventEmitter";
import { PasswordChanged } from "./events/PasswordChanged";
import { EmailChanged } from "./events/EmailChanged";
import { FullNameChanged } from "./events/FullNameChanged";
import { AddressChanged } from "./events/AddressChanged";
import { MobileNumberchanged } from "./events/MobileNumberChanged";


export class User extends Entity {

    private name: FullName;
    private password: Password;
    private address: Address;
    private mobile: MobileNumber;
    private EmailAddress: Email;
    private userEventEmitter: UserEventEmitter;

    constructor(userBuilder: UserBuilder) {
        super(userBuilder.getUId().getUniqueIdentity());
        this.name = userBuilder.getName();
        this.password = userBuilder.getPassword();
        this.address = userBuilder.getAddress();
        this.mobile = userBuilder.getMobile();
        this.EmailAddress = userBuilder.getEmailAddress();
        this.userEventEmitter = UserEventEmitter.instance();
    }

    public changePassword(newPassword: string) {
        this.password = new Password(newPassword);
        this.userEventEmitter.getEventEmitter().emit('PasswordChanged', new PasswordChanged(this.getUId()));
    }

    public changeMail(newEmail: string) {
        this.EmailAddress = new Email(newEmail);
        this.userEventEmitter.getEventEmitter().emit('MailChanged', new EmailChanged(this.getUId(), this.getEmailAddress()));
    }

    public changeName(firstName: string, lastName: string) {
        this.name = new FullName(firstName, lastName);
        this.userEventEmitter.getEventEmitter().emit('FullNameChanged', new FullNameChanged(this.getUId(), this.getFullName()));
    }

    public changeAddress(country: string, city: string, street: string, postalCode: string) {
        this.address = new Address(country, city, street, postalCode);
        this.userEventEmitter.getEventEmitter().emit('AddressChanged', new AddressChanged(this.getUId(), this.getAddress()))
    }

    public changeMobileNumber(newMobileNumber: string) {
        this.mobile = new MobileNumber(newMobileNumber);
        this.userEventEmitter.getEventEmitter().emit('MobileNumberChanged', new MobileNumberchanged(this.getUId(), this.getMobile()));
    }

    public getFullName(): FullName {
        return this.name;
    }

    public getMobile(): MobileNumber {
        return this.mobile;
    }

    public getEmailAddress(): Email {
        return this.EmailAddress;
    }

    public getAddress(): Address {
        return this.address;
    }

    public getPassword(): Password {
        return this.password;
    }

    public getUserEventEmitter(): UserEventEmitter {
        return this.userEventEmitter;
    }

    static userBuilder = class UserBuilder {
        private uId: UniqueEntityId;
        private name: FullName;
        private password: Password;
        private address: Address;
        private mobile: MobileNumber;
        private emailAddress: Email;
        constructor() { }

        public setName(firstName: string, lastName: string): UserBuilder {
            this.name = new FullName(firstName, lastName);
            return this;
        }

        public setMobile(mobile: string): UserBuilder {
            this.mobile = new MobileNumber(mobile);
            return this;
        }

        public setEmail(emailAddress: string): UserBuilder {
            this.emailAddress = new Email(emailAddress);
            return this;
        }

        public setAddress(country: string, city: string, street: string, postalCode: string): UserBuilder {
            this.address = new Address(country, city, street, postalCode);
            return this;
        }

        public setPassword(password: string): UserBuilder {
            this.password = new Password(password);
            return this;
        }

        public setUniqueId(uId?: string): UserBuilder {
            this.uId = new UniqueEntityId(uId);
            return this;
        }

        public build(): User {
            return new User(this);
        }

        public getName(): FullName {
            return this.name;
        }

        public getMobile(): MobileNumber {
            return this.mobile;
        }

        public getEmailAddress(): Email {
            return this.emailAddress;
        }

        public getAddress(): Address {
            return this.address;
        }

        public getPassword(): Password {
            return this.password;
        }

        public getUId(): UniqueEntityId {
            return this.uId;
        }
    }

}