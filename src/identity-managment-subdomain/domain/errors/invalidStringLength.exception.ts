export class StringLengthException  extends Error {
    public readonly name: string;
    public readonly message: string;
    constructor(message?: string){
        super(message);
        this.name = 'StringLengthException';
        this.message = message || `invalid string length`;        
    }
}