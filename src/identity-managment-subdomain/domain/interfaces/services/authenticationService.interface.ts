export interface IAuthenticationService {
    authenticate(mailAddress: string, password: string): void;
}