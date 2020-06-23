export class InvalidMobileNumber extends Error {
    constructor(message?: string){
        super(message);
        this.name = 'invalidMobileNumber';
        this.message = 'invalid mobile number';
    }
}