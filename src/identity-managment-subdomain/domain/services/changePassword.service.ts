import { IChangePasswordService } from "../interfaces/services/changePasswordService.interface";
import { inject } from "inversify";
import { TYPES } from "../../../shared-kernal/ioc/types";
import { IHashService } from "../interfaces/services/hashService.interface";
import { SameOldPasswordException } from "./exceptions/sameOldPassword.exception";
import { ErrorMessages } from "../errors/customErrorMessagesEnum";
import { IUserRepository } from "../../infrastructrue/interfaces/IUserRepository";
import { Email } from "../value-objects/email.valueObject";
import { UserDataModel } from "../../infrastructrue/persistance/models/UserDataModel";
import { IDataModelMapper } from "../../../shared-kernal/interfaces/IDataModelMapper";
import { User } from "../user.entity";


export class ChangePasswordService implements IChangePasswordService {

    private hashingService: IHashService;
    private userRepository: IUserRepository;
    private userDataMapper: IDataModelMapper<User, UserDataModel>;
    constructor(
        @inject(TYPES.IHashService) hashingService:IHashService,
        @inject(TYPES.IUserRepository) userRepository: IUserRepository,
        @inject(TYPES.IDataModelMapper) userDataMapper: IDataModelMapper<User,UserDataModel>){
            this.hashingService = hashingService
            this.userRepository = userRepository;
            this.userDataMapper = userDataMapper;
        }

    isSameOldPassword(oldPassword: string, newPassword: string): boolean {
        if(this.hashingService.compareHash(newPassword, oldPassword)){
            throw new SameOldPasswordException(ErrorMessages.NEW_PASSWORD_SAME_AS_OLD_PASSWORD);
        }
        return false;
    }

    changePassword(mailAddress: string, newPassword: string): void {
        const user: UserDataModel = this.userRepository.findUserOfMail(new Email(mailAddress));
        if(!this.isSameOldPassword(newPassword, user.hashedPassword)){
            const userDomainModel: User = this.userDataMapper.mapDataModelToDomainModel(user);
            userDomainModel.changePassword(newPassword);
            userDomainModel.getUserEventEmitter().getEventEmitter().on('PasswordChanged', ()=>{/** todo password changed action */})
        }
    }

}