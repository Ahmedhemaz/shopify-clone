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
@injectable()
export class RegisterUserController {
    private userDtoMapper: IDtoMapper<User, UserDto>;
    private userDataModelMapper: IDataModelMapper<User, UserDataModel>;
    private userRepository: IUserRepository;

    constructor(
        @inject(TYPES.IDtoMapper) userDtoMapper: IDtoMapper<User, UserDto>,
        @inject(TYPES.IDataModelMapper) userDataModelMapper: IDataModelMapper<User, UserDataModel>,
        @inject(TYPES.IUserRepository) userRepository: IUserRepository
    ) {
        this.userDtoMapper = userDtoMapper;
        this.userDataModelMapper = userDataModelMapper;
        this.userRepository = userRepository;
    }
    create = async (req: Request, res: Response) => {
        const userDomainModel: User = this.userDtoMapper.mapDtoToDomainModel(req.body);
        const userDataModel: UserDataModel = await this.userDataModelMapper.mapDomainModelToDataModel(userDomainModel);
        try {

            this.userRepository.create(userDataModel);

            subscriber.getConnectionObject().subscribe("[USER-CREATED]")
            subscriber.getConnectionObject().on("message", (channel, message) => {
                // save created event in event store DB
                // create confirmation link 
                // send it via email
                console.log("Recieved Data:" + message);

            })
        } catch (error) {
            console.log(error);
        }
        // create user repository
        // presist user data
        // on account created send confirmation mail

    }

}