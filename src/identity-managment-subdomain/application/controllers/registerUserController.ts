import { Request, Response } from "express";
import { inject, injectable } from "inversify";
import { IDtoMapper } from "../../../shared-kernal/interfaces/IDtoMapper";
import { User } from "../../domain/user.entity";
import { UserDto } from "../Dto/UserDto";
import { SERVICES } from "../container/types";
@injectable()
export class RegisterUserController {
    private userMapper: IDtoMapper<User, UserDto>;
    constructor(
        @inject(SERVICES.IDtoMapper) userMapper: IDtoMapper<User, UserDto>
    ){
        this.userMapper = userMapper;
    }
    create = (req: Request, res: Response) => {
        const userDomainModel = this.userMapper.mapDtoToDomainModel(req.body);
        // create user repository
        // presist user data
        // emit registered event
        // send confirmation mail

    }
    
}