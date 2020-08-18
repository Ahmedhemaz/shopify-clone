import { Column } from "typeorm";

export class AddressDataModel {

    @Column({
        name: 'country'
    })
    country: string;

    @Column({
        name: 'city'
    })
    city: string;

    @Column({
        name: 'street'
    })
    street: string;

    @Column({
        name: 'postal_code'
    })
    postalCode: string;
}