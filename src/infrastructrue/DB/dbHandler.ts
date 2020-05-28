import { createConnection, Connection } from 'typeorm';
import { ConnectionsFactory } from '../connectionsFactory';

export class DBHandler {

    private readonly dbConnection: any;
    private readonly connectionsFactory: ConnectionsFactory;
    constructor(){
        this.connectionsFactory = new ConnectionsFactory();
        this.dbConnection = this.connectionsFactory.getConnectionObject(DBHandler.name).getConnectionData();
    }

    public  connect(){        
        createConnection(this.dbConnection).then(dbConnection => {
            console.log(`Is Database Connected ? ${dbConnection.isConnected}`);
        }).catch(error => console.log(error))
    }

    public disconnect(){
        this.dbConnection.close()
        .then(() => console.log(`Database Connection has been closed successfully`))
        .catch(error => console.log(error));
    }

}