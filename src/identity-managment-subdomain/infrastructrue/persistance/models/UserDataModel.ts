import { Entity, Column, PrimaryGeneratedColumn, VersionColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { AddressDataModel } from "./AddressDataModel";
import { FullNameDataModel } from "./FullNameDataModel";

@Entity()
export class UserDataModel {
    @Column({
        primary: true,
        type: "uuid",
        unique: true
    })
    uId: string;

    @VersionColumn()
    version: number;


    @Column(type => FullNameDataModel)
    name: FullNameDataModel;

    @Column({
        nullable: false
    })
    email: string;

    @Column({
        nullable: false
    })
    mobileNumber: string;

    @Column(type => AddressDataModel)
    address: AddressDataModel;

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