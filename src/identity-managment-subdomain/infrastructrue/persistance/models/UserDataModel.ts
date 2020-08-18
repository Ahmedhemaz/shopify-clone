import { Entity, Column, PrimaryGeneratedColumn, VersionColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { AddressDataModel } from "./AddressDataModel";
import { FullNameDataModel } from "./FullNameDataModel";

@Entity()
export class UserDataModel {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "uuid",
        unique: true
    })
    uId: string;

    @VersionColumn()
    version: number;


    @Column(type=> FullNameDataModel)
    name: FullNameDataModel;

    @Column()
    email: string;

    @Column()
    mobileNumber: string;

    @Column(type => AddressDataModel)
    address: AddressDataModel;

    @Column()
    hashedPassword: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;

}