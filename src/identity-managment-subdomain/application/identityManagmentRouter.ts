import express from 'express';
import { RegisterUserMiddleware } from './middlewares/registerUserMiddleware';
import { myContainer } from '../../shared-kernal/ioc/inversify.config.ts';
import { TYPES } from '../../shared-kernal/ioc/types';
const identityRouter = express.Router();

identityRouter.get('/api/v1/test/', (req,res)=>{
    res.status(200).send({message: 'hello'});
})

identityRouter.post('/api/v1/register', (myContainer.get<RegisterUserMiddleware>(TYPES.IMiddleware)).execute )
export default identityRouter;