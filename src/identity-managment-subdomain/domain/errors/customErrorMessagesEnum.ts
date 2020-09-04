export enum ErrorMessages {
    EMPTY_PASSWORD = `password Can't be empty`,
    PASSWORD_LENGTH = `password minimum length must be 8 character`,
    INVALID_PASSWORD_FORMAT =  `must contain at least 1 special, 1 uppercase and 1 small character`,
    EMPTY_COUNTRY = `Country Can't be empty`,
    EMPTY_CITY = `city Can't be empty`,
    EMPTY_STREET = `street Can't be empty`,
    EMPTY_POSTAL_CODE = `postal Code Can't be empty`,
    INVALID_POSTAL_CODE = 'invalid postal code',
    EMPTY_FIRST_NAME = `first Name Can't be empty`,
    EMPTY_LAST_NAME = `last Name Can't be empty`,
    EMPTY_EMAIL = `email Can't be empty`,
    EMPTY_MOBILE = `mobile Can't be empty`,
    INVALID_UUID_V4 = `unique identity must be UUID version 4 format`,
    NEW_PASSWORD_SAME_AS_OLD_PASSWORD = `new password must not be same as old password`
}