import 'reflect-metadata';
import { injectable } from "inversify";
import { IConnectionOptions } from '../interfaces/IConnectionOptions';

@injectable()
export class RedisConnectionOptions implements IConnectionOptions {

    readonly connectionOptions: any;
    constructor() {
        this.connectionOptions = {
            host: process.env.REDIS_HOST,
            port: +process.env.REDIS_PORT,
        }
    };

    public getConnectionOptions(): Readonly<any> {
        return this.connectionOptions;
    }
}