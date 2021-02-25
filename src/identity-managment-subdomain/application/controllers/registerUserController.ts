import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { IDtoMapper } from "../../../shared-kernal/interfaces/IDtoMapper";
import { User } from "../../domain/user.entity";
import { UserDto } from "../Dto/UserDto";
import { TYPES } from "../../../shared-kernal/ioc/types";
import { IDataModelMapper } from "../../../shared-kernal/interfaces/IDataModelMapper";
import { UserDataModel } from "../../infrastructrue/persistance/models/UserDataModel";
import { IUserRepository } from "../../infrastructrue/persistance/interfaces/IUserRepository";
import { subscriber } from '../../../app';
import { IVerificationTokenRepository } from "../../infrastructrue/persistance/interfaces/IVerificationTokenRepository";
@injectable()
export class RegisterUserController {
    private userDtoMapper: IDtoMapper<User, UserDto>;
    private userDataModelMapper: IDataModelMapper<User, UserDataModel>;
    private userRepository: IUserRepository;
    private verificationTokenRepository: IVerificationTokenRepository;
    private messageCount: number;

    constructor(
        @inject(TYPES.IDtoMapper) userDtoMapper: IDtoMapper<User, UserDto>,
        @inject(TYPES.IDataModelMapper) userDataModelMapper: IDataModelMapper<User, UserDataModel>,
        @inject(TYPES.IUserRepository) userRepository: IUserRepository,
        @inject(TYPES.IVerificationTokenRepository) verificationTokenRepository: IVerificationTokenRepository
    ) {
        this.userDtoMapper = userDtoMapper;
        this.userDataModelMapper = userDataModelMapper;
        this.userRepository = userRepository;
        this.verificationTokenRepository = verificationTokenRepository;
        this.messageCount = 0;
    }
    create = async (req: Request, res: Response) => {
        const userDomainModel: User = this.userDtoMapper.mapDtoToDomainModel(req.body);
        const userDataModel: UserDataModel = await this.userDataModelMapper.mapDomainModelToDataModel(userDomainModel);
        try {
            this.userRepository.create(userDataModel);
            subscriber.getConnectionObject().subscribe("[USER-CREATED]");
            subscriber.getConnectionObject().on("message", (channel, message) => {
                this.incrementMessageCount();
                if (this.messageCount == 1) {
                    const userDataModel: UserDataModel = JSON.parse(message);
                    this.verificationTokenRepository.create(userDataModel.email);
                } else {
                    subscriber.getConnectionObject().unsubscribe("[USER-CREATED]");
                    this.resetMessageCount();
                }
            });
        } catch (error) {
            console.log(error);
        }

    }


    private incrementMessageCount() {
        this.messageCount += 1;
    }

    private resetMessageCount() {
        this.messageCount = 0;
    }

}