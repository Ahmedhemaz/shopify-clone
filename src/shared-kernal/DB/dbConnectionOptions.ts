import "reflect-metadata";
import { injectable } from "inversify";
import { IDbConnectionOptions } from "../interfaces/IDbConnectionOptions";
import { UserDataModel } from "../../identity-managment-subdomain/infrastructrue/persistance/models/UserDataModel";
import { VerificationTokenModel } from "../../identity-managment-subdomain/infrastructrue/persistance/models/VerificationTokenModel";

@injectable()
export class DbConnectionOptions implements IDbConnectionOptions {
  readonly connectionOptions: any;
  constructor() {
    this.connectionOptions = {
      type: process.env.TYPE,
      host: process.env.HOST,
      port: +process.env.PORT,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASENAME,
      entities: [UserDataModel, VerificationTokenModel], //todo craete entities array for all project in separate file
    };
  }

  public getConnectionOptions(): Readonly<any> {
    return this.connectionOptions;
  }
}
