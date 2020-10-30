import { MigrationInterface, QueryRunner } from "typeorm";

export class createUserTableMigration1604022545178 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const createUsersTableQuery: string = ` CREATE TABLE IF NOT EXISTS users (
            uId VARCHAR(36) UNIQUE NOT NULL PRIMARY KEY,
            first_name VARCHAR(255) NOT NULL,
            last_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            mobile_number VARCHAR(255) NOT NULL UNIQUE,
            country VARCHAR(255) NOT NULL,
            city VARCHAR(255) NOT NULL,
            street VARCHAR(255) NOT NULL,
            postal_code VARCHAR(255) NOT NULL,
            hashedPassword VARCHAR(128) NOT NULL,
            version INT,
            verified BOOLEAN DEFAULT false,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )  ENGINE=INNODB;`
        await queryRunner.query(createUsersTableQuery);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
