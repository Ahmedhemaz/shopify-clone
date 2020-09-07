import express from 'express';
import { RegisterUserMiddleware } from './middlewares/registerUserMiddleware';
import { myContainer } from '../../shared-kernal/ioc/inversify.config.ts';
import { TYPES } from '../../shared-kernal/ioc/types';
import { RegisterUserSanitizer } from './sanitizers/RegisterUserSanitizer';
const identityRouter = express.Router();

identityRouter.post('/api/v1/register', [
    (myContainer.get<RegisterUserMiddleware>(TYPES.IMiddleware)).execute, 
    (myContainer.get<RegisterUserSanitizer>(TYPES.ISanitizer)).sanitize])


export default identityRouter;