import { DBHandler } from "../../../infrastructrue/DB/dbHandler"
import { ConnectionObjectMock } from "./__mocks__/connectionObjectMock";
import { ConnectionOptionsMock } from "./__mocks__/connectionOptionsMock";
jest.mock('typeorm');

describe('test dbHandler', ()=>{
    let dbHandler: DBHandler;
    let connectionOptions: ConnectionOptionsMock;
    let connection: ConnectionObjectMock;
    beforeAll(()=>{

        dbHandler = new DBHandler()
        connectionOptions= {
            type: 'mysql',
            host: 'Host',
            port: 1234,
            username: 'ahmedtest',
            password: 'ahmedtestbardo',
            database: 'ahmedtestbardobardo',
        }
        connection = new ConnectionObjectMock(connectionOptions);
    })


  beforeEach( () => {
    require('typeorm').createConnection(connectionOptions);
  });

    it('should create dbHandler', ()=>{
        expect(dbHandler).toBeInstanceOf(DBHandler);
    });
    
    it('should call connect function', async () =>{
        await dbHandler.connect();
        expect(dbHandler.getDbConnectionObject().isConnected).toBe(false);   
  
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
        expect(dbHandler.isDatabaseConnected()).toBe(true)
    })
    
    it('should return connectionObjectMock', () =>{
        connection.isConnected = true;
        dbHandler['dbConnectionObject']=connection;
        expect(dbHandler.getDbConnectionObject()).toBeInstanceOf(ConnectionObjectMock);
    })
    
})
