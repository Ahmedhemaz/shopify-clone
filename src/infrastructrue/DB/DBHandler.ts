import { createConnection, Connection } from 'typeorm';

export class DBHandler {

    constructor(){}

    public  getDbConnection(){
        createConnection({
            type: 'mysql',
            host: process.env.HOST,
            port: +process.env.PORT,
            username: process.env.USERNAME,
            password: process.env.PASSWORD,
            database: process.env.DATABASENAME,
            cli: {
                migrationsDir: process.env.MIGRATIONS_DIR
            }
        }).then(dbConnection=> {
            console.log(`Is Database Connected ? ${dbConnection.isConnected}`);
        }).catch(error => console.log(error))
    }
}