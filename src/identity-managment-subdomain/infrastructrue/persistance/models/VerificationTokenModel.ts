import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserDataModel } from "./UserDataModel";


@Entity({ name: 'verification_tokens' })
export class VerificationTokenModel {

    @PrimaryGeneratedColumn()
    id?: number

    @Column({
        name: 'token'
    })
    token: string;

    @Column({
        name: 'expire_date'
    })
    expireDate: Date;

    @OneToOne(() => UserDataModel)
    @JoinColumn({ name: 'user_email' })
    user_email: string;
}