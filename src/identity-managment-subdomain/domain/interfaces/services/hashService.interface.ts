export interface IHashService {
    hashPassword(plainText: string):Promise<string>;
    compareHash(plainText: string, hashText: string): Promise<boolean>;
}