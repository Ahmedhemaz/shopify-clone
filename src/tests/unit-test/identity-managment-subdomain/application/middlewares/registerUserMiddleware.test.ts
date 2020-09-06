import { RegisterUserMiddleware } from "../../../../../identity-managment-subdomain/application/middlewares/registerUserMiddleware"
import { RegisterUserRequestBodyValidatorMock } from "../../../__mocks__/identity-managment-subdomain-mocks/application/validators/request-body-validators/RegisterUserRequestBodyValidatorMock"
import { Request, Response } from "express";
import { UserDtoMock } from "../../../__mocks__/identity-managment-subdomain-mocks/application/Dto/UserDtoMock";
import { ErrorMessages } from "../../../../../identity-managment-subdomain/domain/errors/customErrorMessagesEnum";

describe('RegiserUserMiddleware tests', ()=>{
    const registerUserRequestBodyValidatorMock: RegisterUserRequestBodyValidatorMock = new RegisterUserRequestBodyValidatorMock();
    const registerUserMiddleware = new RegisterUserMiddleware(registerUserRequestBodyValidatorMock);
    const next = jest.fn();
    const req = {body: new UserDtoMock()} as Request;
    const res = {} as Response;
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);
    
    it('should call next hock', ()=>{
        registerUserMiddleware.execute(req,res,next);
        expect(next).toHaveBeenCalled();
    });

    it('should send bad request error', ()=>{
        req.body.fullName.firstName = '';
        registerUserMiddleware.execute(req,res,next);
        expect(res.status).toHaveBeenCalled();
        expect(res.send).toHaveBeenCalled();
    })
})