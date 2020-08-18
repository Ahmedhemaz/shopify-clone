import { IValueObject } from "../../../shared-kernal/interfaces/IValueObject";
import { InvalidEmailException } from "./exceptions/invalidEmail.exception";
import  isEmail  from 'validator/lib/isEmail';
export class Email implements IValueObject<Email> {
    
    private readonly email:string;

    constructor(email: string){
        if(!isEmail(email)) throw new InvalidEmailException();
        this.email = email;
    }

    public equals(otherEmail: Email): boolean {
        return this.email === otherEmail.email
    }

    public getEmail(): Readonly<string> {
        return this.email;
    }
}