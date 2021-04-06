export class AddressDtoMock {
    public country: string;
    public city: string;
    public street: string;
    public postalCode: string;

    constructor(country: string, city: string, street: string, postalCode: string){
        this.country =  country;
        this.city = city;
        this.street = street;
        this.postalCode = postalCode;
    }
}