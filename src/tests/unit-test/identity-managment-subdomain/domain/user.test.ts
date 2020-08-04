import { User } from "../../../../identity-managment-subdomain/domain/user.entity";

describe('user entity tests', ()=>{
    it('should create user with uId', ()=>{
        let user:User = new User.userBuilder()
                        .setName('Ahmed', 'Ibrahim')
                        .setMail('asdsadasd@asd.com')
                        .setPassword('654123%aA%!231')
                        .build();

    });

})