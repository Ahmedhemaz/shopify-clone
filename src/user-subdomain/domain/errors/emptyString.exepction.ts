export class EmptyStringExepction  extends Error {
    public readonly name: string;
    public readonly message: string;
    constructor(message?: string){
        super(message);
        this.name = 'EmptyStringExepction';
        this.message = `string can't be empty`;
    }
}