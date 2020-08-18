export class SameOldPasswordException  extends Error {
    public readonly name: string;
    public readonly message: string;
    constructor(message?: string){
        super(message);
        this.name = 'SameOldPasswordException';
        this.message = message || `new password must not be same as old password`;        
    }
}