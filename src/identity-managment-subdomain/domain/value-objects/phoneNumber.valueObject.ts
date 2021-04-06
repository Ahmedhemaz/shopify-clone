import { IValueObject } from "../../../shared-kernal/interfaces/IValueObject";
import { InvalidMobileNumberException } from "./exceptions/invalidMobileNumber.exception";
import  isMobilePhone  from 'validator/lib/isMobilePhone';
export class MobileNumber implements IValueObject<MobileNumber> {
    public readonly number: string;

    constructor(mobileNumber: string){
        if(!isMobilePhone(mobileNumber)) throw new InvalidMobileNumberException();
        this.number = mobileNumber;
    }

    public equals(mobile: MobileNumber):boolean {
        return this.number === mobile.number;
    }

    public getNumber(): Readonly<string> {
        return this.number;        
    }
}