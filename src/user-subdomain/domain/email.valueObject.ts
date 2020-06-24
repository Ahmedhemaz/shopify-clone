import { IValueObject } from "../../shared-kernal/interfaces/IValueObject";
import { InvalidEmail } from "./errors/invalidEmail.error";
import  isEmail  from 'validator/lib/isEmail';
export class Email implements IValueObject<Email> {
    private readonly email:string;
    constructor(email: string){
        if(!isEmail(email)){
            throw new InvalidEmail();
        }
        this.email = email;
    }

    public equals(otherEmail: Email): boolean {
        return this.email === otherEmail.email
    }

    public getEmail(): Readonly<string> {
        return this.email;
    }
}