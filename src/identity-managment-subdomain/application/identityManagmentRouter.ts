import express from 'express';
import { RegisterUserMiddleware } from './middlewares/registerUserMiddleware';
import { RegisterUserSanitizer } from './sanitizers/RegisterUserSanitizer';
import { RegisterUserController } from './controllers/registerUserController';
import { TYPES } from '../../shared-kernal/ioc/types';
import { myContainer } from '../../shared-kernal/ioc/inversify.config.ts';
const identityRouter = express.Router();

identityRouter.post('/api/v1/register',
    [
        (myContainer.get<RegisterUserMiddleware>(TYPES.IMiddleware)).execute,
        (myContainer.get<RegisterUserSanitizer>(TYPES.ISanitizer)).sanitize,
    ],
    (myContainer.get<RegisterUserController>(TYPES.RegisterUserController).create)
);


export default identityRouter;