import 'reflect-metadata';
import * as bcrypt from 'bcrypt';
import { IHashService } from '../interfaces/services/hashService.interface';
import { injectable } from 'inversify';

@injectable()
export class HashingService implements IHashService {
    private saltRounds: number;
    constructor(){
        this.saltRounds = 10;
    }
    public async hashPassword(plainText: string): Promise<string>{
        return await bcrypt.hash(plainText, this.saltRounds);
    }

    public async compareHash(plainText: string, hashText: string): Promise<boolean>{
        return await bcrypt.compare(plainText, hashText);
    }

}