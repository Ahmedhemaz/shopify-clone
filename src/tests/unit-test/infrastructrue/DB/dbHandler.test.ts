import { DBHandler } from "../../../../shared-kernal/DB/dbHandler"
import { ConnectionOptionsMock } from "../../__mocks__/connectionOptionsMock";
import { ConnectionObjectMock } from "../../__mocks__/connectionObjectMock";
import { Connection } from "typeorm";
import { DbConnectionOptionsMock } from "../../__mocks__/DbConnectionOptionsMock";
jest.mock('typeorm');

describe('test dbHandler', ()=>{
    let dbHandler: DBHandler;
    let connectionOptions: ConnectionOptionsMock;
    let connection: Connection;
    beforeAll(()=>{
        connectionOptions= {
            type: 'mysql',
            host: 'Host',
            port: 1234,
            username: 'ahmedtest',
            password: 'ahmedtestbardo',
            database: 'ahmedtestbardobardo',
        }
        dbHandler = new DBHandler(new DbConnectionOptionsMock(connectionOptions))
        connection = require('typeorm').Connection;
    })


  beforeEach( () => {
    require('typeorm').createConnection(connectionOptions);
  });

    it('should create dbHandler', ()=>{
        expect(dbHandler).toBeInstanceOf(DBHandler);
    });
    
    it('should call connect function', async () =>{
        await dbHandler.connect();
        expect(dbHandler.getDbConnectionObject().isConnected).toBe(true);   
  
    });
    
    
    it('should call disconnect function', async () =>{
        dbHandler['dbConnectionObject'] = connection;        
        await dbHandler.disconnect()
        expect(dbHandler.getDbConnectionObject().isConnected).toBe(false);
    });
    
    it('should return true', () =>{
        dbHandler['dbConnectionObject']= connection;
        expect(dbHandler.isDatabaseConnected()).toBe(true)
    })
    
    it('should return connectionObjectMock', () =>{
        dbHandler['dbConnectionObject']=connection;
        expect(dbHandler.getDbConnectionObject()).toBeInstanceOf(ConnectionObjectMock);
    })
    
})
