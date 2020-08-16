import { User } from "../../../../identity-managment-subdomain/domain/user.entity";

describe('user entity tests', ()=>{
    it('should create user with uId', ()=>{
        
        let user:User = new User.userBuilder()
                        .setName('Ahmed', 'Ibrahim')
                        .setEmail('asdsadasd@asd.com')
                        .setPassword('654123%aA%!231')
                        .setUniqueId('fc114523-79b1-4b9d-a8a8-53a39b099ca1')
                        .build();
    });

})