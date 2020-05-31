import { createConnection, Connection } from 'typeorm';
import { inject, injectable } from 'inversify';
import { TYPES } from '../ioc/types';
import { IDbConnectionOptions } from './interfaces/IDbConnectionOptions';
import { IDbHandler } from './interfaces/IDbHandler';
@injectable()
export class DBHandler implements IDbHandler{
    readonly dbConnectionOptions: any;
    dbConnectionObject: Connection;
    constructor(
        @inject(TYPES.IDbConnectionOptions) dbConnectionOptions:IDbConnectionOptions
        )
        {
            this.dbConnectionOptions = dbConnectionOptions.getConnectionOptions();
        }

    public async connect(){        
        try {
            this.dbConnectionObject = await createConnection(this.dbConnectionOptions);
            console.log(`Is Database Connected? ${this.dbConnectionObject.isConnected}`);
        } catch (error) {
            console.log(error.message);
        }
    }

    public async disconnect(){
        try {
            this.dbConnectionObject.close();
            console.log(`Database Connection has been closed successfully`);
        } catch (error) {
            console.log(error.message);   
        }
    }

    public getDbConnectionObject(): Readonly<Connection>{
        return this.dbConnectionObject;
    }

    public isDatabaseConnected(): boolean {
        return this.dbConnectionObject.isConnected;
    }

}