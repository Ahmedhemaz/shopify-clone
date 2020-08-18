import { IHashService } from "../../../../../identity-managment-subdomain/domain/interfaces/services/hashService.interface";

export class HashingServiceMock implements IHashService {

    private mockedHashedPassword: string;

    constructor (mockedHashedPassword: string){
        this.mockedHashedPassword = mockedHashedPassword;
    }
    hashPassword(plainText: string): Promise<string> {
        return new Promise<string>(resolve =>{
            return resolve(this.mockedHashedPassword);
        })
    }
    compareHash(plainText: string, hashText: string): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            return resolve(true)
        });
    }
    
}