export class InvalidEmail extends Error {
    public readonly name: string;
    public readonly message: string;
    constructor(message?: string){
        super(message);
        this.name = 'invalidEmail';
        this.message = 'invalid email format';
    }
}