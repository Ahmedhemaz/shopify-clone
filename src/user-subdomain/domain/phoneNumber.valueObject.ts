import { IValueObject } from "../../shared-kernal/interfaces/IValueObject";
import { isMobilePhone } from 'validator';
import { InvalidMobileNumber } from "./errors/invalidMobileNumber.error";
export class MobileNumber implements IValueObject<MobileNumber> {
    public readonly number: string;

    constructor(mobileNumber: string){
        if(isMobilePhone(mobileNumber.trim())){
            this.number = mobileNumber;
        } else {
            throw new InvalidMobileNumber();
        }
    }
    /**
     * equals
     */
    public equals(mobile: MobileNumber):boolean {
        return this.number === mobile.number;
    }

    /**
     * getNumber
     */
    public getNumber(): Readonly<string> {
        return this.number;        
    }
}