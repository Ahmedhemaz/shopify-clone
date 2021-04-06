import { FullNameDto } from "./FullNameDto";
import { AddressDto } from "./AddressDto";

export interface UserDto {
    fullName: FullNameDto;
    email: string;
    password: string;
    mobile: string;
    address: AddressDto;
}