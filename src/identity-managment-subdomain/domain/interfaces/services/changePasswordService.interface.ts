export interface IChangePasswordService {
    isSameOldPassword(oldPassword: string, newPassword: string): boolean;
    changePassword(oldPassword: string, newPassword: string): void;
}