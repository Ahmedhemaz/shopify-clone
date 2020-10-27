import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { IDtoMapper } from "../../../shared-kernal/interfaces/IDtoMapper";
import { User } from "../../domain/user.entity";
import { UserDto } from "../Dto/UserDto";
import { SERVICES } from "../container/types";
import { TYPES } from "../../../shared-kernal/ioc/types";
import { IDataModelMapper } from "../../../shared-kernal/interfaces/IDataModelMapper";
import { UserDataModel } from "../../infrastructrue/persistance/models/UserDataModel";
@injectable()
export class RegisterUserController {
    private userDtoMapper: IDtoMapper<User, UserDto>;
    private userDataModelMapper: IDataModelMapper<User, UserDataModel>;
    constructor(
        @inject(SERVICES.IDtoMapper) userDtoMapper: IDtoMapper<User, UserDto>,
        @inject(TYPES.IDataModelMapper) userDataModelMapper: IDataModelMapper<User, UserDataModel>
    ) {
        this.userDtoMapper = userDtoMapper;
        this.userDataModelMapper = this.userDataModelMapper;
    }
    create = async (req: Request, res: Response) => {
        const userDomainModel: User = this.userDtoMapper.mapDtoToDomainModel(req.body);
        const userDataModel: UserDataModel = await this.userDataModelMapper.mapDomainModelToDataModel(userDomainModel);
        // create user repository
        // presist user data
        // emit registered event
        // send confirmation mail

    }

}