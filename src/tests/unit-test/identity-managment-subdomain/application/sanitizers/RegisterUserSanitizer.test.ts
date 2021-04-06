import { RegisterUserSanitizer } from "../../../../../identity-managment-subdomain/application/sanitizers/RegisterUserSanitizer"
import { UserDtoMock } from "../../../__mocks__/identity-managment-subdomain-mocks/application/Dto/UserDtoMock";
import { Request, Response } from "express";

describe('RegisterUserSanitizer tests', ()=>{
    const registerUserSanitizer: RegisterUserSanitizer = new RegisterUserSanitizer();
    const next = jest.fn();
    const req = {body: new UserDtoMock()} as Request;
    const res = {} as Response;
    res.send = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);

    it('should call next hook', ()=> {
        registerUserSanitizer.sanitize(req,res,next);
        expect(next).toHaveBeenCalled();
    });

    it("should escape /<>' from firstName", ()=> {
        const userDtoMock = new UserDtoMock();
        userDtoMock.getUserDtoWithUnSanitizedFirstName();
        req.body = userDtoMock;
        registerUserSanitizer.sanitize(req,res,next);
        expect(req.body.fullName.firstName).toBe('&lt;&gt;&#x2F;&#x27;');
        
    })
})