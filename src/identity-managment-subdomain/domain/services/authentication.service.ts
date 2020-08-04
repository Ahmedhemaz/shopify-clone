import 'reflect-metadata';
import { IAuthenticationService } from "../interfaces/services/authenticationService.interface";
import { IHashService } from "../interfaces/services/hashService.interface";
import { inject, injectable } from "inversify";
import { TYPES } from "../../../shared-kernal/ioc/types";

@injectable()
export class AuthenticationService implements IAuthenticationService{
    private hashService: IHashService;
    //todo inject repository of user to get hashed password
    //create unit tests of authentication service
    constructor(@inject(TYPES.IHashService) hashService:IHashService){
        this.hashService = hashService;
    }
    public async authenticate(mailAddress: string, password: string): Promise<boolean>{
        return await this.isCorrectPassword(password);
    }

    public async isCorrectPassword(password: string): Promise<boolean> {
        return await this.hashService.compareHash(password, '$2b$10$Ky6LMZh0C41QdLbyXOiWZeAY1mTC916c3w7M1Y8T5Oqg39t44YNa2');
    }
}