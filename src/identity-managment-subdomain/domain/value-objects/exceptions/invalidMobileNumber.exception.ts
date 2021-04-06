export class InvalidMobileNumberException extends Error {
    public readonly name: string;
    public readonly message: string;
    constructor(message?: string){
        super(message);
        this.name = 'InvalidMobileNumberException';
        this.message = message || 'invalid mobile number';
    }
}