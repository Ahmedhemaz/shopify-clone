import { Column } from "typeorm";

export class FullNameDataModel {
    @Column({name: 'frist_name', nullable: false})
    firstName: string;

    @Column({name: 'last_name', nullable: false})
    lastName: string;
}