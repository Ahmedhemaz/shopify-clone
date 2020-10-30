import { Column } from "typeorm";

export class AddressDataModel {

    @Column({
        name: 'country',
        nullable: false
    })
    country: string;

    @Column({
        name: 'city',
        nullable: false
    })
    city: string;

    @Column({
        name: 'street',
        nullable: false
    })
    street: string;

    @Column({
        name: 'postal_code',
        nullable: false
    })
    postalCode: string;
}