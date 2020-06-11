import {MigrationInterface, QueryRunner} from "typeorm";

export class ProductTableMigrations1589899200161 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`
        create table products(
            id INT NOT NULL AUTO_INCREMENT,
            title VARCHAR(250) NOT NULL,
            descreption VARCHAR(500) NOT NULL,
            price  DECIMAL(10,2) NOT NULL,
            image VARCHAR(500),
            created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY ( id )
         );`)
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
