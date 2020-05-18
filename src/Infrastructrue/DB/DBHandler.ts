import { createConnection, Connection } from 'typeorm';

export class DBHandler {

    constructor(){}

    public async  getDbConnection(): Promise<Connection>{
        return createConnection({
            type: 'mysql',
            host: process.env.HOST,
            port: +process.env.PORT,
            username: process.env.USERNAME,
            password: process.env.PASSWORD,
            database: process.env.DATABASENAME
        })
    }
}