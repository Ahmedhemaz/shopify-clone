import { User } from "../../user.entity";
import { FullName } from "../../value-objects/name.valueObject";
import { MobileNumber } from "../../value-objects/phoneNumber.valueObject";
import { Email } from "../../value-objects/email.valueObject";
import { Password } from "../../value-objects/password.valueObject";
import { Address } from "../../value-objects/address.valueObject";
import { UniqueEntityId } from "../../value-objects/UniqueEntityId.valueObject";

export interface UserBuilder {
    setName(firstName: string,lastName: string): UserBuilder;
    setMobile(mobile: string): UserBuilder;
    setEmail(mailAddress: string): UserBuilder;
    setAddress(country: string,city: string,street: string,postalCode: string): UserBuilder;
    setPassword(password: string): UserBuilder;
    build(): User;
    getName(): FullName;
    getMobile(): MobileNumber;
    getEmailAddress(): Email;
    getAddress(): Address;
    getPassword(): Password;
    getUId(): UniqueEntityId;
}