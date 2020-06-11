import { Connection } from "typeorm";

export interface IDbHandler {
    readonly dbConnectionOptions:any;
    connect(): void;
    disconnect(): void;
    getDbConnectionObject():Readonly<Connection>;
    isDatabaseConnected(): boolean;
}