import { FullNameDto } from "./FullNameDto";
import { AddressDto } from "./AddressDto";

export interface UserDto {
    fullName: FullNameDto;
    emaill: string;
    password: string;
    mobile: string;
    address: AddressDto;
}