import 'reflect-metadata';
import { injectable } from "inversify";
import { IDbConnectionOptions } from "../../application/interfaces/IDbConnectionOptions";

@injectable()
export class DbConnectionOptions implements IDbConnectionOptions{
    
    readonly connectionOptions: any;
    constructor(){
        this.connectionOptions = {
            type: 'mysql',
            host: process.env.HOST,
            port: +process.env.PORT,
            username: process.env.USERNAME,
            password: process.env.PASSWORD,
            database: process.env.DATABASENAME,
        }
    };

    public getConnectionOptions(): Readonly<any> {
        return this.connectionOptions;
    }
}