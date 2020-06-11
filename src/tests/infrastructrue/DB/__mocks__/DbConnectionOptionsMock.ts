import { IDbConnectionOptions } from "../../../../application/interfaces/IDbConnectionOptions";
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