import { User } from "../../../../identity-managment-subdomain/domain/user.entity";

describe('user entity tests', ()=>{
    it('should create user with uId', ()=>{
        new User().setName('Ahmed','Ibrahim').setAddress('l','o','l','11111');
    });

})