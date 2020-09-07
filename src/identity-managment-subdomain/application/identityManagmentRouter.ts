import express from 'express';
import { RegisterUserMiddleware } from './middlewares/registerUserMiddleware';
import { RegisterUserSanitizer } from './sanitizers/RegisterUserSanitizer';
import { serviceRegistery } from './container/inversify.config';
import { SERVICES } from './container/types';
import { RegisterUserController } from './controllers/registerUserController';
const identityRouter = express.Router();

identityRouter.post('/api/v1/register', 
    [(serviceRegistery.get<RegisterUserMiddleware>(SERVICES.IMiddleware)).execute, 
     (serviceRegistery.get<RegisterUserSanitizer>(SERVICES.ISanitizer)).sanitize
    ],(serviceRegistery.get<RegisterUserController>(SERVICES.RegisterUserController).create))


export default identityRouter;