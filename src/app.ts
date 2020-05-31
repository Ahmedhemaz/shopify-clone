import 'reflect-metadata';
import express from 'express';
import './infrastructrue/environment'
import { myContainer } from './infrastructrue/ioc/inversify.config.ts';
import { TYPES } from './infrastructrue/ioc/types';
import { IDbHandler } from './infrastructrue/DB/interfaces/IDbHandler';

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