import { User } from "../../../../identity-managment-subdomain/domain/user.entity";

export class UserMock {
    private userMockData: User;
    private userHashedPassword: string;
    constructor(){
        this.userMockData = new User.userBuilder()
                                .setName('FirstNameMock', 'LastNameMock')
                                .setAddress('CountryMock', 'CityMock', 'StreetMock', '11865')
                                .setEmail('Email@Mock.com')
                                .setMobile('0113529796164')
                                .setPassword('P@55word')
                                .setUniqueId('fc114523-79b1-4b9d-a8a8-53a39b099ca1')
                                .build();
        this.userHashedPassword = '$2b$10$53i2qSE3sGGKZyeDJAY4BuHIGHp8uyobairLzmJgR7NahoWBIt.4q';
    }
    public getUserMockData(): User {
        return this.userMockData;
    }
}