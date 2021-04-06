export class InvalidPostalCodeException extends Error {
    public readonly name: string;
    public readonly message: string;
    constructor(message?: string){
        super(message);
        this.name = 'InvalidPostalCodeException';
        this.message = message || 'invalid postal code';
    }
}