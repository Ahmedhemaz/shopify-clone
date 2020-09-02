import { IMiddleware } from "./IMiddleware";
import {Request, Response} from 'express';

export class RegisterUserMiddleware implements IMiddleware<Request, Response> {

    static create(): RegisterUserMiddleware {
        return new RegisterUserMiddleware();
    }

    execute(req: Request, res: Response, next: any){
        console.log(req);
        next();
        // validate request headers
        // validate request body
        // if valid call next()
        // if not return error with it's status code 
    }
}