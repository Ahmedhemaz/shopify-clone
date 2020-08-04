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
 
const myContainer = new Container();
myContainer.bind<IDbConnectionOptions>(TYPES.IDbConnectionOptions).to(DbConnectionOptions);
myContainer.bind<IDbHandler>(TYPES.IDbHandler).to(DBHandler);
myContainer.bind<IHashService>(TYPES.IHashService).to(HashingService);
myContainer.bind<IAuthenticationService>(TYPES.IAuthenticationService).to(AuthenticationService);
export { myContainer };