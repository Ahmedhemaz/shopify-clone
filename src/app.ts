import 'reflect-metadata';
import express from 'express';
import './shared-kernal/environment'
import { myContainer } from './shared-kernal/ioc/inversify.config.ts';
import { TYPES } from './shared-kernal/ioc/types';
import { IDbHandler } from './shared-kernal/interfaces/IDbHandler';
import identityRouter from '../src/identity-managment-subdomain/application/identityManagmentRouter';
import { createClient, RedisClient } from 'redis';
import { IConnectionHandler } from './shared-kernal/interfaces/IConnectionHandler';
const dbHandler = myContainer.get<IDbHandler>(TYPES.IDbHandler);
const redisClient = myContainer.get<IConnectionHandler<RedisClient>>(TYPES.IConnectionHandler);
redisClient.connect();

dbHandler.connect();
const app = express();

app.use(express.json());

app.use(identityRouter);
const port = 3000;
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});