import { Container } from "inversify";
import { TYPES } from "./types";
import { IDbConnectionOptions } from "../../application/interfaces/IDbConnectionOptions";
import { DbConnectionOptions } from "../DB/dbConnectionOptions";
import { IDbHandler } from "../../application/interfaces/IDbHandler";
import { DBHandler } from "../DB/dbHandler";
 
const myContainer = new Container();
myContainer.bind<IDbConnectionOptions>(TYPES.IDbConnectionOptions).to(DbConnectionOptions);
myContainer.bind<IDbHandler>(TYPES.IDbHandler).to(DBHandler);
export { myContainer };