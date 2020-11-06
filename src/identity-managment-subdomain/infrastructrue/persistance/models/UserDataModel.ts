import { Entity, Column, VersionColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";

@Entity({ name: 'users' })
export class UserDataModel {
    @Column({
        primary: true,
        type: "uuid",
        unique: true
    })
    uId: string;

    @VersionColumn()
    version: number;

    @Column({ name: 'first_name', nullable: false })
    firstName: string;

    @Column({ name: 'last_name', nullable: false })
    lastName: string;

    @Column({
        nullable: false
    })
    email: string;

    @Column({
        name: 'mobile_number',
        nullable: false
    })
    mobileNumber: string;

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

    @Column({
        nullable: false
    })
    hashedPassword: string;

    @Column({
        default: false
    })
    verified: boolean

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

}