import { FullNameDtoMock } from "./FullNameDtoMock";
import { AddressDtoMock } from "./AddressDtoMock";
import { UserDto } from "../../../../../../identity-managment-subdomain/application/Dto/UserDto";

export class UserDtoMock implements UserDto {
    public fullName: FullNameDtoMock;
    public email: string;
    public password: string;
    public mobile: string;
    public address: AddressDtoMock;

    constructor() {
        this.fullName = new FullNameDtoMock('firstNameMock', 'lastNameMock');
        this.address = new AddressDtoMock('CountryMock', 'CityMock', 'streetMock', '21551');
        this.password = '@1Qadfgv';
        this.email = 'mock@mock.com';
        this.mobile = '015456454551';
    }

    public getUserDtoWithEmptyFirstName() {
        this.fullName.firstName = ' ';
        return this;
    }

    public getUserDtoWithEmptyLastName() {
        this.fullName.lastName = ' ';
        return this;
    }

    public getUserDtoWithEmptyCountry() {
        this.address.country = ' ';
        return this;
    }

    public getUserDtoWithEmptyCity() {
        this.address.city = ' ';
        return this;
    }

    public getUserDtoWithEmptyStreet() {
        this.address.street = ' ';
        return this;
    }

    public getUserDtoWithEmptyPostalCode() {
        this.address.postalCode = ' ';
        return this;
    }

    public getUserDtoWithInvalidPostalCode() {
        this.address.postalCode = 'adsqj';
        return this;
    }

    public getUserDtoWithInvalidEmail() {
        this.email = 'asdoajsf';
        return this;
    }

    public getUserDtoWithEmptyEmail() {
        this.email = ' ';
        return this;
    }

    public getUserDtoWithEmptyMobile() {
        this.mobile = ' ';
        return this;
    }

    public getUserDtoWithInvalidMobile() {
        this.mobile = 'dfoii32tdsg';
        return this;
    }

    public getUserDtoWithEmptyPassword() {
        this.password = ' ';
        return this;
    }

    public getUserDtoWithInvalidPasswordFormat() {
        this.password = 'aaaaaaaa';
        return this;
    }

    public getUserDtoWithInvalidPasswordMinLength() {
        this.password = '@Aa1';
        return this;
    }

}