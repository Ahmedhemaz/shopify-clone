import { UniqueEntityId } from "../../../../../identity-managment-subdomain/domain/value-objects/UniqueEntityId.valueObject"
import { ErrorMessages } from "../../../../../identity-managment-subdomain/domain/errors/customErrorMessagesEnum";
import { InvalidUniqueIdentityException } from "../../../../../identity-managment-subdomain/domain/value-objects/exceptions/invalidUniqueIdentity.exception";

describe('UniqueEntityId tests', ()=>{
    const invalidUniqueIdentity: string = 'asdqw-asdqw-213-a'
    it('should create unique entity identity', ()=>{
        expect(new UniqueEntityId()).toBeInstanceOf(UniqueEntityId);
    });

    it('should return true when uniqueEntityId equals uniqueIdentityCopy  ', ()=>{
        const uniqueEntityId: UniqueEntityId = new UniqueEntityId();
        const uniqueEntityIdCopy: UniqueEntityId = new UniqueEntityId(uniqueEntityId.getUniqueIdentity());
        expect(uniqueEntityId.equals(uniqueEntityIdCopy)).toBe(true);
    });

    it('should throw invalidUniqueIdentityException', ()=>{
        expect(()=> new UniqueEntityId(invalidUniqueIdentity))
        .toThrowError(new InvalidUniqueIdentityException(ErrorMessages.INVALID_UUID_V4));
    })
})