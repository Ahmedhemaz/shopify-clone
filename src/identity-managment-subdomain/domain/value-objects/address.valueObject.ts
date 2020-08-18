import { IValueObject } from "../../../shared-kernal/interfaces/IValueObject";
import { EmptyStringException } from "./exceptions/emptyString.exception";
import { InvalidPostalCodeException } from "./exceptions/invalidPostalCode.exception";
import { ErrorMessages } from "../errors/customErrorMessagesEnum";
import isEmpty from "validator/lib/isEmpty";
import isPostalCode from "validator/lib/isPostalCode";
export class Address implements IValueObject<Address> {

    private  country: string;
    private  city: string;
    private  street: string;
    private  postalCode: string;

    constructor(country: string, city: string, street: string, postalCode: string){
        this.setCountry(country);
        this.setCity(city);
        this.setStreet(street);
        this.setPostalCode(postalCode);
        Object.freeze(this);
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

    private setCountry(country: string) : void{
        if(isEmpty(country, {ignore_whitespace: true})) throw new EmptyStringException(ErrorMessages.EMPTY_COUNTRY);
        this.country = country;
    }

    private setCity(city: string) : void{
        if(isEmpty(city, {ignore_whitespace: true})) throw new EmptyStringException(ErrorMessages.EMPTY_CITY);
        this.city = city;
    }

    private setStreet(street: string) : void{
        if(isEmpty(street, {ignore_whitespace: true})) throw new EmptyStringException(ErrorMessages.EMPTY_STREET);
        this.street = street;
    }

    private setPostalCode(postalCode: string) : void{
        if(isEmpty(postalCode,{ignore_whitespace: true})) throw new EmptyStringException(ErrorMessages.EMPTY_POSTAL_CODE);
        if(!isPostalCode(postalCode, "EE")) throw new InvalidPostalCodeException(ErrorMessages.INVALID_POSTAL_CODE);
        this.postalCode = postalCode;
    }

}