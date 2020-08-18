export class InvalidEmailException extends Error {
    public readonly name: string;
    public readonly message: string;
    constructor(message?: string){
        super(message);
        this.name = 'InvalidEmailException';
        this.message = message || 'invalid email format';
    }
}