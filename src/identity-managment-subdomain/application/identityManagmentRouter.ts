import express from 'express';
import { RegisterUserMiddleware } from './middlewares/registerUserMiddleware';
const identityRouter = express.Router();

identityRouter.get('/api/v1/test/', (req,res)=>{
    res.status(200).send({message: 'hello'});
})

identityRouter.post('/api/v1/register', (RegisterUserMiddleware.create()).execute )
export default identityRouter;