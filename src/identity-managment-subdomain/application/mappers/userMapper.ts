import { IDtoMapper } from "../../../shared-kernal/interfaces/IDtoMapper";
import { User } from "../../domain/user.entity";
import { UserDto } from "../Dto/UserDto";
import { FullNameDto } from "../Dto/FullNameDto";
import { AddressDto } from "../Dto/AddressDto";

export class UserMapper implements IDtoMapper<User, UserDto> {
    mapDtoToDomainModel(userDto: UserDto): User {
        return new User.userBuilder()
                    .setName(userDto.fullName.firstName, userDto.fullName.lastName)
                    .setAddress( userDto.address.country, userDto.address.city,
                                 userDto.address.street, userDto.address.postalCode)
                    .setEmail(userDto.emaill)
                    .setMobile(userDto.password)
                    .setPassword(userDto.password)
                    .build();

    }
    mapDomainModelToDto(userDomainModel: User): UserDto {
        let userDto: UserDto ;
        userDto.fullName = this.mapDomainModelFullNameToDtoFullName(userDomainModel);
        userDto.address = this.mapDomainModelAddressToDtoAddress(userDomainModel);
        userDto.emaill = userDomainModel.getEmailAddress().getEmail();
        userDto.mobile = userDomainModel.getMobile().getNumber();
        return 
    }

    private mapDomainModelFullNameToDtoFullName(domainModel: User): FullNameDto{
        return {firstName: domainModel.getFullName().getFirstName(),
                lastName: domainModel.getFullName().getLastName()}
    }

    private mapDomainModelAddressToDtoAddress(domainModel: User): AddressDto{
        return {
            country: domainModel.getAddress().getCountry(),
            city: domainModel.getAddress().getCity(),
            street: domainModel.getAddress().getStreet(),
            postalCode: domainModel.getAddress().getPostalCode()
        }
    }
    
}