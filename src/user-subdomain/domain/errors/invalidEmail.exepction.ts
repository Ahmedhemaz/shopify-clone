export class InvalidEmailExepction extends Error {
    public readonly name: string;
    public readonly message: string;
    constructor(message?: string){
        super(message);
        this.name = 'InvalidEmailExepction';
        this.message = 'invalid email format';
    }
}