import { myContainer } from "../../../../../shared-kernal/ioc/inversify.config.ts";
import { IAuthenticationService } from "../../../../../identity-managment-subdomain/domain/interfaces/services/authenticationService.interface";
import { TYPES } from "../../../../../shared-kernal/ioc/types";

describe('authentication service tests', ()=>{
    it('should authenticate user', async ()=>{
        const authenticationService = myContainer.get<IAuthenticationService>(TYPES.IAuthenticationService);
        expect(await authenticationService.authenticate('asd','Password')).toBe(true);
    });
})