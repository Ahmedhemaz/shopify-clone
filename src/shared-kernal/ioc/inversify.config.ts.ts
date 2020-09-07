import { Container } from "inversify";
import { TYPES } from "./types";
import { IDbConnectionOptions } from "../interfaces/IDbConnectionOptions";
import { DbConnectionOptions } from "../DB/dbConnectionOptions";
import { IDbHandler } from "../interfaces/IDbHandler";
import { DBHandler } from "../DB/dbHandler";
import { IHashService } from "../../identity-managment-subdomain/domain/interfaces/services/hashService.interface";
import { HashingService } from "../../identity-managment-subdomain/domain/services/hashing.service";
import { IAuthenticationService } from "../../identity-managment-subdomain/domain/interfaces/services/authenticationService.interface";
import { AuthenticationService } from "../../identity-managment-subdomain/domain/services/authentication.service";
import { IUserRepository } from "../../identity-managment-subdomain/infrastructrue/interfaces/IUserRepository";
import { UserRepository } from "../../identity-managment-subdomain/infrastructrue/persistance/repositories/UserRepository";
import { IDataModelMapper } from "../interfaces/IDataModelMapper";
import { UserDataMapper } from "../../identity-managment-subdomain/domain/mappers/user.mapper";
import { User } from "../../identity-managment-subdomain/domain/user.entity";
import { UserDataModel } from "../../identity-managment-subdomain/infrastructrue/persistance/models/UserDataModel";

 
const myContainer = new Container();
myContainer.bind<IDbConnectionOptions>(TYPES.IDbConnectionOptions).to(DbConnectionOptions);
myContainer.bind<IDbHandler>(TYPES.IDbHandler).to(DBHandler);
myContainer.bind<IHashService>(TYPES.IHashService).to(HashingService);
myContainer.bind<IAuthenticationService>(TYPES.IAuthenticationService).to(AuthenticationService);
myContainer.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);
myContainer.bind<IDataModelMapper<User,UserDataModel>>(TYPES.IDataModelMapper).to(UserDataMapper);
export { myContainer };