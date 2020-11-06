import { MigrationInterface, QueryRunner } from "typeorm";

export class createVerificationTableMigration1604690822084 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const createVerificationTableQuery: string =
            ` CREATE TABLE IF NOT EXISTS verification_tokens (
            id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
            token VARCHAR(25) NOT NULL,
            expire_date TIMESTAMP NOT NULL,
            user_email VARCHAR(255) NOT NULL UNIQUE,
            FOREIGN KEY (user_email) REFERENCES users(email)
        )  ENGINE=INNODB;`
        await queryRunner.query(createVerificationTableQuery);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
