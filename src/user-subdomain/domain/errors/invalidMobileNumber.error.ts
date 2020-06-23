export class InvalidMobileNumber extends Error {
    public readonly name: string;
    public readonly message: string;
    constructor(message?: string){
        super(message);
        this.name = 'invalidMobileNumber';
        this.message = 'invalid mobile number';
    }
}