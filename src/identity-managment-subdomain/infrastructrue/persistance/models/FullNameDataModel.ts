import { Column } from "typeorm";

export class FullNameDataModel {
    @Column({name: 'frist_name'})
    firstName: string;

    @Column({name: 'last_name'})
    lastName: string;
}