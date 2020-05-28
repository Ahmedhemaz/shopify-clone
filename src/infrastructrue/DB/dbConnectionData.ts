import { IConnection } from "../IConnection";
import { Connection } from "typeorm";

export class DbConnectionData implements IConnection{
    
    private readonly connectionData: any;
    constructor(){
        this.connectionData = {
            type: 'mysql',
            host: process.env.HOST,
            port: +process.env.PORT,
            username: process.env.USERNAME,
            password: process.env.PASSWORD,
            database: process.env.DATABASENAME,
            cli: {
                migrationsDir: process.env.MIGRATIONS_DIR
            }
        }
    };

    public getConnectionData(): Connection {
        return this.connectionData;
    }
}