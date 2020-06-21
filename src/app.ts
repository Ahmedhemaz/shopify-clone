import 'reflect-metadata';
import express from 'express';
import './shared-kernal/environment'
import { myContainer } from './shared-kernal/ioc/inversify.config.ts';
import { TYPES } from './shared-kernal/ioc/types';
import { IDbHandler } from './shared-kernal/interfaces/IDbHandler';

const dbHandler = myContainer.get<IDbHandler>(TYPES.IDbHandler);
dbHandler.connect();
const app = express();
const port = 3000;

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});