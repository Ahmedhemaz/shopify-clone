import 'reflect-metadata';
import { IAuthenticationService } from "../interfaces/services/authenticationService.interface";
import { IHashService } from "../interfaces/services/hashService.interface";
import { inject, injectable } from "inversify";
import { TYPES } from "../../../shared-kernal/ioc/types";
import { IUserRepository } from '../../infrastructrue/persistance/interfaces/IUserRepository';
import { Email } from '../value-objects/email.valueObject';
import { Password } from '../value-objects/password.valueObject';
import { UserDataModel } from '../../infrastructrue/persistance/models/UserDataModel';

@injectable()
export class AuthenticationService implements IAuthenticationService {
    private hashService: IHashService;
    private userRepository: IUserRepository;
    constructor(
        @inject(TYPES.IHashService) hashService: IHashService,
        @inject(TYPES.IUserRepository) userRepository: IUserRepository) {
        this.hashService = hashService;
        this.userRepository = userRepository;
    }
    public async authenticate(mailAddress: string, password: string): Promise<boolean> {
        const user: UserDataModel = this.userRepository.findUserOfMail(new Email(mailAddress));
        return await this.isCorrectPassword(new Password(password), user.hashedPassword);
    }

    private async isCorrectPassword(password: Password, hashedPassword: string): Promise<boolean> {
        return await this.hashService.compareHash(password.getPassword(), hashedPassword);
    }
}