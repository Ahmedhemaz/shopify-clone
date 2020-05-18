import express from 'express';
import 'reflect-metadata';
import { DBHandler } from './Infrastructrue/DB/DBHandler'
import './Infrastructrue/environment'

const dbConnection = (new DBHandler()).getDbConnection();
dbConnection.then(dbConnection=> {
  console.log(`Connected To Database ${dbConnection.isConnected}`);
});

const app = express();
const port = 3000;

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});