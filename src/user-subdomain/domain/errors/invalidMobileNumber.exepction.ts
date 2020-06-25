export class InvalidMobileNumberExepction extends Error {
    public readonly name: string;
    public readonly message: string;
    constructor(message?: string){
        super(message);
        this.name = 'InvalidMobileNumberExepction';
        this.message = 'invalid mobile number';
    }
}