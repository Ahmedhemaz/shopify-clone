export interface ITokenGenerator {
    generateAlphaNumericToken(): Promise<string>;
}