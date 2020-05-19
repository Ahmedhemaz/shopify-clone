import express from 'express';
import 'reflect-metadata';
import { DBHandler } from './infrastructrue/DB/DBHandler'
import './infrastructrue/environment'

// Connect to database while bootstraping the application
(new DBHandler()).getDbConnection();

const app = express();
const port = 3000;

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});