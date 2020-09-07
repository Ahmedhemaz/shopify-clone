import { ISanitizer } from "./ISanitizer";
import { UserDto } from "../Dto/UserDto";
import escape from 'validator/lib/escape';
import { Request, Response } from "express";
import { injectable } from "inversify";

@injectable()
export class RegisterUserSanitizer implements ISanitizer<UserDto> {
    sanitize = (req: Request, res: Response, next: any)=> {
        this.sanitizeDeepBodyProperties(req.body);
        next();
    }

    private sanitizeDeepBodyProperties(body: UserDto){
        const objectKeys = Object.keys(body);
        objectKeys.forEach(key=>{            
            if(typeof body[key] === 'object'){
                return this.sanitizeDeepBodyProperties(body[key]);
            }          
            body[key] = escape(body[key]).trim();
        });
    }

}