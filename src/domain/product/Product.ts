import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Product {

    @PrimaryColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    descraption: string;

    @Column()
    price: number;

    @Column()
    image: string;

}
