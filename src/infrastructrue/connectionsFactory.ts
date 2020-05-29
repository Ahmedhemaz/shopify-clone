import { IConnection } from './IConnection';
import { DBHandler } from './DB/dbHandler';
import { DbConnectionOptions } from './DB/dbConnectionOptions';
export class ConnectionsFactory{

    private connectionsMap:Map<string, IConnection>;
    constructor(){
        this.connectionsMap = new Map<string,IConnection>();
        this.setConnectionsMap();
    }

    public getConnectionObject(connectionClassName: string): IConnection{
        return this.connectionsMap.get(connectionClassName);
    }

    private setConnectionsMap(){
        this.connectionsMap.set(DBHandler.name, new DbConnectionOptions())
    }
}