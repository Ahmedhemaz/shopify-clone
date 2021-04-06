export class PasswordFormatException  extends Error {
    public readonly name: string;
    public readonly message: string;
    constructor(message?: string){
        super(message);
        this.name = 'PasswordFormatException';
        this.message = message || `invalid password format`;        
    }
}