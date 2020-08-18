import { UserRepositoryMock } from "../../../__mocks__/identity-managment-subdomain-mocks/repositories/UserRepositoryMock";
import { HashingServiceMock } from "../../../__mocks__/identity-managment-subdomain-mocks/services/HashingServiceMock";
import { UserMock } from "../../../__mocks__/identity-managment-subdomain-mocks/UserMock";
import { AuthenticationService } from "../../../../../identity-managment-subdomain/domain/services/authentication.service";

jest.mock('typeorm', () => {
    return {
        PrimaryGeneratedColumn: () => {},
        Column: () => {},
        Entity: () => {},
        VersionColumn: ()=>{},
        CreateDateColumn: ()=>{},
        UpdateDateColumn: ()=>{}}
    });
describe('authentication service tests', ()=>{
    const userMock: UserMock = new UserMock();
    const userRepositoryMock: UserRepositoryMock = new UserRepositoryMock();
    const hashingServiceMock: HashingServiceMock = new HashingServiceMock(userMock.getUserMockData().getPassword().getPassword());
    it('should authenticate user', async ()=>{
        const authenticationService = new AuthenticationService(hashingServiceMock, userRepositoryMock)
        expect(await authenticationService.authenticate('a@a.com', 'P@55word')).toBe(true);
    });
})