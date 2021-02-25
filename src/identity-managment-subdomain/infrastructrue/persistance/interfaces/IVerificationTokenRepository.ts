import { VerificationTokenModel } from "../models/VerificationTokenModel";

export interface IVerificationTokenRepository {
    findByUserEmail(userEmail: string): Promise<VerificationTokenModel>
    create(userEmail: string): void
    update(userEmail: string): void
    delete(userEmail: string): void
}