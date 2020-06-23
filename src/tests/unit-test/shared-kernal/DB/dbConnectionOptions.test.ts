import { DbConnectionOptions } from "../../../../shared-kernal/DB/dbConnectionOptions"
import { myContainer } from '../../../../shared-kernal/ioc/inversify.config.ts';
import { TYPES } from '../../../../shared-kernal/ioc/types';
import { IDbConnectionOptions } from "../../../../shared-kernal/interfaces/IDbConnectionOptions";
describe('dbConnectionOptions tests', ()=>{
    let dbConnectionOptions: DbConnectionOptions;
    let  mockedConnectionOptions: any;
    beforeAll(()=>{
        dbConnectionOptions = myContainer.get<IDbConnectionOptions>(TYPES.IDbConnectionOptions);
        mockedConnectionOptions = {
            type: 'mysql',
            host: 'Host',
            port: 1234,
            username: 'ahmedtest',
            password: 'ahmedtestbardo',
            database: 'ahmedtestbardobardo',
        };
        Object.defineProperty(dbConnectionOptions, 
            'connectionOptions',
            {value: mockedConnectionOptions})
    });
    
    it('should create dbConnectionOptions object', ()=>{
        expect(dbConnectionOptions).toBeInstanceOf(DbConnectionOptions);        
    });

    it('should return connection options', ()=>{
        expect(dbConnectionOptions.getConnectionOptions()).toStrictEqual(mockedConnectionOptions);
    })
})
