import { nanoid } from 'nanoid/async'
import { injectable } from 'inversify';
import { ITokenGenerator } from '../interfaces/ITokenGenerator';

@injectable()
export class TokenGenerator implements ITokenGenerator {

    public async generateAlphaNumericToken(): Promise<string> {
        return await nanoid();
    }

}