import 'reflect-metadata';
import { createClient, RedisClient } from 'redis';
import { inject, injectable } from 'inversify';
import { TYPES } from '../ioc/types';
import { IConnectionHandler } from '../interfaces/IConnectionHandler';
import { IConnectionOptions } from '../interfaces/IConnectionOptions';

@injectable()
export class RedisConnectionHandler implements IConnectionHandler<RedisClient> {
    readonly connectionOptions: any;
    private redisConnection: RedisClient;
    private isConnectedFlag: boolean;
    constructor(@inject(TYPES.IConnectionOptions) redisConnectionOptions: IConnectionOptions) {
        this.connectionOptions = redisConnectionOptions.getConnectionOptions();
    }
    connect(): void {
        this.redisConnection = createClient(this.connectionOptions);

        this.redisConnection.on('error', (err) => {
            console.log('Error ' + err);
        });

        this.redisConnection.on('connect', () => {
            console.log('Connected to Redis');
            this.isConnectedFlag = true;
        });
    }
    disconnect(): void {
        this.redisConnection.quit();
        this.isConnectedFlag = false;
    }
    getConnectionObject(): Readonly<RedisClient> {
        return this.redisConnection;
    }
    isConnected(): boolean {
        return this.isConnectedFlag;
    }

}