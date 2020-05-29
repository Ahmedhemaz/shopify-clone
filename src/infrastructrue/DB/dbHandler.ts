import { createConnection, Connection } from 'typeorm';
import { ConnectionsFactory } from '../connectionsFactory';

export class DBHandler {

    private readonly dbConnectionOptions: any;
    private readonly connectionsFactory: ConnectionsFactory;
    private  dbConnectionObject: Connection;
    constructor(){
        this.connectionsFactory = new ConnectionsFactory();
        this.dbConnectionOptions = this.connectionsFactory
                                          .getConnectionObject(DBHandler.name)
                                          .getConnectionOptions();
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