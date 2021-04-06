import { inject, injectable } from "inversify";
import { getConnection } from "typeorm";
import { ITokenGenerator } from "../../../../shared-kernal/interfaces/ITokenGenerator";
import { TYPES } from "../../../../shared-kernal/ioc/types";
import { VerificationTokenModel } from "../models/VerificationTokenModel";
import { publisher } from '../../../../app';
import { IVerificationTokenRepository } from "../interfaces/IVerificationTokenRepository";

@injectable()
export class VerificationTokenRepository implements IVerificationTokenRepository {
    private tokenGenerator: ITokenGenerator;
    constructor(
        @inject(TYPES.ITokenGenerator) tokenGenerator: ITokenGenerator) {
        this.tokenGenerator = tokenGenerator;
    }
    findByUserEmail(userEmail: string): Promise<VerificationTokenModel> {
        throw new Error("Method not implemented.");
    }

    public async create(userEmail: string) {
        const verificationToken: VerificationTokenModel = new VerificationTokenModel();
        verificationToken.token = await this.tokenGenerator.generateAlphaNumericToken();
        verificationToken.user_email = userEmail;
        verificationToken.expireDate = new Date(Date.now() + (3600 * 1000 * 24));
        try {
            await getConnection()
                .createQueryBuilder()
                .insert()
                .into(VerificationTokenModel)
                .values(verificationToken)
                .execute();
            publisher.getConnectionObject()
                .publish("[VerificationToken-CREATED]", JSON.stringify(verificationToken));
        } catch (error) {
            console.log(error);
        }
    }

    update(): void {
        throw new Error("Method not implemented.");
    }

    delete(userEmail: string): void {
        throw new Error("Method not implemented.");
    }
}