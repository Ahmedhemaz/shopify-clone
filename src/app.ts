import 'reflect-metadata';
import express from 'express';
import './shared-kernal/environment'
import { myContainer } from './shared-kernal/ioc/inversify.config.ts';
import { TYPES } from './shared-kernal/ioc/types';
import { IDbHandler } from './shared-kernal/interfaces/IDbHandler';
import identityRouter from '../src/identity-managment-subdomain/application/identityManagmentRouter';
const dbHandler = myContainer.get<IDbHandler>(TYPES.IDbHandler);
dbHandler.connect();
const app = express();

app.use(express.json());

app.use(identityRouter);
const port = 3000;
app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});