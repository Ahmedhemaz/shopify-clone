import { IValueObject } from "../../shared-kernal/interfaces/IValueObject";
import { InvalidEmailExepction } from "./errors/invalidEmail.exepction";
import  isEmail  from 'validator/lib/isEmail';
export class Email implements IValueObject<Email> {
    
    private readonly email:string;

    constructor(email: string){
        if(!isEmail(email)) throw new InvalidEmailExepction();
        this.email = email;
    }

    public equals(otherEmail: Email): boolean {
        return this.email === otherEmail.email
    }

    public getEmail(): Readonly<string> {
        return this.email;
    }
}