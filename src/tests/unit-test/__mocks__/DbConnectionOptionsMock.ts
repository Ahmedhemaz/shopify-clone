import { IDbConnectionOptions } from "../../../shared-kernal/interfaces/IDbConnectionOptions";
import { ConnectionOptionsMock } from "./connectionOptionsMock";

export class DbConnectionOptionsMock implements IDbConnectionOptions {
    connectionOptions:ConnectionOptionsMock ;
    constructor(connectionOptions:ConnectionOptionsMock){
        this.connectionOptions = connectionOptions;
    }
    getConnectionOptions(): Readonly<ConnectionOptionsMock> {
        return this.connectionOptions;
    }
    
}