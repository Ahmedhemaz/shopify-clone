import express from 'express';
import 'reflect-metadata';
import { DBHandler } from './infrastructrue/DB/dbHandler'
import './infrastructrue/environment'
import { ConnectionsFactory } from './infrastructrue/connectionsFactory';

// Connect to database while bootstraping the application
(new DBHandler
  (new ConnectionsFactory())
).connect();

const app = express();
const port = 3000;

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});