import { HashingService } from "../../../../../identity-managment-subdomain/domain/services/hashing.service"

describe('encryption service test', ()=>{
    it('should encrypt plain text password', async()=>{
        const encryptionService: HashingService = new HashingService();
        await encryptionService.hashPassword('Password');
    });
});