import { DBHandler } from "../../../infrastructrue/DB/dbHandler"
import { ConnectionObjectMock } from "./mocks/connectionObjectMock";
import { ConnectionOptionsMock } from "./mocks/connectionOptionsMock";

describe('test dbHandler', ()=>{
    let dbHandler: DBHandler;
    let connectionOptions: ConnectionOptionsMock;
    let connection: ConnectionObjectMock;
    beforeAll(()=>{
        dbHandler = new DBHandler()
        connectionOptions= {
            type: 'mysql',
            host: 'process.env.HOST',
            port: 1234,
            username: 'process.env.USERNAME',
            password: 'process.env.PASSWORD',
            database: 'process.env.DATABASENAME',
        }
        connection = new ConnectionObjectMock(connectionOptions);
    })

    it('should create dbHandler', ()=>{
        expect(dbHandler).toBeInstanceOf(DBHandler);
    });
    
    it('should call connect function', async (done) =>{
        const dbHandlerSpy = spyOn(dbHandler, 'connect');
        dbHandler.connect()
        expect(dbHandler.connect).toBeCalled();
        done();
    });
    
    
    it('should call disconnect function', async (done) =>{
        const dbHandlerSpy = spyOn(dbHandler, 'disconnect');
        dbHandler.disconnect()
        expect(dbHandler.disconnect).toBeCalled();
        done();
    });
    
    it('should return true', () =>{
        const connection = new ConnectionObjectMock(connectionOptions);
        connection.isConnected = true;
        dbHandler['dbConnectionObject']=connection;
        expect(dbHandler.isDatabaseConnected()).toBeTruthy()
    })
    
    it('should return connectionObjectMock', () =>{
        connection.isConnected = true;
        dbHandler['dbConnectionObject']=connection;
        expect(dbHandler.getDbConnectionObject()).toBeInstanceOf(ConnectionObjectMock);
    })
    
})
