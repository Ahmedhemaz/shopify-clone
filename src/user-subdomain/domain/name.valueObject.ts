import { IValueObject } from "../../shared-kernal/interfaces/IValueObject";
import { EmptyStringExepction } from "./errors/emptyString.exepction";
import isEmpty from 'validator/lib/isEmpty';
export class FullName implements IValueObject<FullName> {

    private readonly firstName: string;
    private readonly lastName: string;

    constructor(firstName: string, lastName: string){
        if(isEmpty(firstName,{ignore_whitespace: true})) throw new EmptyStringExepction(`first Name Can't be empty`);
        if(isEmpty(lastName, {ignore_whitespace: true})) throw new EmptyStringExepction(`last Name Can't be empty`);
        
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public equals(fullName: FullName): boolean{
        return (this.firstName == fullName.firstName) && (this.lastName === fullName.lastName);
    }

    public getFirstName(): Readonly<string> {return this.firstName;}
    public getLastName(): Readonly<string> {return this.lastName;}
    public getFullName(): Readonly<string> {return `${this.firstName} ${this.lastName}`;}

}