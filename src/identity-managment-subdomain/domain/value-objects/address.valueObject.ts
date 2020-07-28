import { IValueObject } from "../../../shared-kernal/interfaces/IValueObject";
import { EmptyStringException } from "../errors/emptyString.exception";
import { InvalidPostalCodeException } from "../errors/invalidPostalCode.exception";
import { ErrorMessages } from "../errors/customErrorMessagesEnum";
import isEmpty from "validator/lib/isEmpty";
import isPostalCode from "validator/lib/isPostalCode";
import { AddressBuilder } from "../../infrastructrue/builders/AddresBuilder.interface";

export class Address implements IValueObject<Address> {

    private readonly  country: string;
    private readonly  city: string;
    private readonly  street: string;
    private readonly  postalCode: string;

    constructor(addressBuilder: AddressBuilder){
        this.country = addressBuilder.getCountry();
        this.city = addressBuilder.getCity();
        this.street = addressBuilder.getStreet();
        this.postalCode = addressBuilder.getPostalCode();          
    }

    public equals(anAddress: Address): boolean {
        return  this.city === anAddress.getCity() &&
                this.country === anAddress.getCountry() &&
                this.street === anAddress.getStreet() &&
                this.postalCode === anAddress.getPostalCode()
    }

    public getCountry(): string{
        return this.country;
    }

    public getCity(): string {
        return this.city;
    }

    public getStreet(): string {
        return this.street;
    }

    public getPostalCode(): string {
        return this.postalCode;
    }

    static AddressBuilder = class AddressBuilder{
        private country: string;
        private city: string;
        private street: string;
        private postalCode: string;
        constructor(){}

        public setCountry(country: string) : AddressBuilder{
            if(isEmpty(country, {ignore_whitespace: true})) throw new EmptyStringException(ErrorMessages.EMPTY_COUNTRY);
            this.country = country;
            return this;
        }
    
        public setCity(city: string) : AddressBuilder{
            if(isEmpty(city, {ignore_whitespace: true})) throw new EmptyStringException(ErrorMessages.EMPTY_CITY);
            this.city = city;
            return this;
        }
    
        public setStreet(street: string) : AddressBuilder{
            if(isEmpty(street, {ignore_whitespace: true})) throw new EmptyStringException(ErrorMessages.EMPTY_STREET);
            this.street = street;
            return this;
        }
    
        public setPostalCode(postalCode: string) : AddressBuilder{
            if(isEmpty(postalCode,{ignore_whitespace: true})) throw new EmptyStringException(ErrorMessages.EMPTY_POSTAL_CODE);
            if(!isPostalCode(postalCode, "EE")) throw new InvalidPostalCodeException(ErrorMessages.INVALID_POSTAL_CODE);
            this.postalCode = postalCode;
            return this;
        }

        public build(): Address{
            return new Address(this)
        }
        public getCountry(): string{
            return this.country;
        }
    
        public getCity(): string {
            return this.city;
        }
    
        public getStreet(): string {
            return this.street;
        }
    
        public getPostalCode(): string {
            return this.postalCode;
        }

    }

}