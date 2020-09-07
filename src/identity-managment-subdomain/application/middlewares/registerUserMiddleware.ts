import 'reflect-metadata';
import { IMiddleware } from "./IMiddleware";
import { Request, Response } from 'express';
import { IRequestBodyValidator } from "../validators/request-body-validators/IRequestBodyValidator";
import { UserDto } from "../Dto/UserDto";
import { inject, injectable } from "inversify";
import { ClientErrorsStatusCodes } from "../../../shared-kernal/http-status-codes/ClientErrorsStatusCodes";
import { SERVICES } from '../container/types';
@injectable()
export class RegisterUserMiddleware implements IMiddleware<Request, Response> {

    private registerUserRequestBodyValidator: IRequestBodyValidator<UserDto>;
    public constructor(
        @inject(SERVICES.IRequestBodyValidator) registerUserRequestBodyValidator: IRequestBodyValidator<UserDto>
        ) {
        this.registerUserRequestBodyValidator = registerUserRequestBodyValidator;        
    }

    execute = (req: Request, res: Response, next: any) => {
        try {
            // validate request headers            
            (this.registerUserRequestBodyValidator).isRequestBodyValid(req.body);
            next();
        } catch (error) {
            res.status(ClientErrorsStatusCodes.BAD_REQUEST).send({message: error.message})
        }
    }
}