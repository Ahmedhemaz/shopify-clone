// edit types to concerete class
const TYPES = {
    IDataModelMapper: Symbol.for("IDataModelMapper<User, UserDataModel>"),
    IDbConnectionOptions: Symbol.for("IDbConnectionOptions"),
    IConnectionOptions: Symbol.for("IConnectionOptions"),
    IDbHandler: Symbol.for("IDbHandler"),
    IConnectionHandler: Symbol.for("IConnectionHandler"),
    UniqueEntityId: Symbol.for("UniqueEntityId"),
    IHashService: Symbol.for("IHashService"),
    IAuthenticationService: Symbol.for("IAuthenticationService"),
    IUserRepository: Symbol.for('IUserRepository'),
    RegisterUserController: Symbol.for('RegisterUserController'),
    IDtoMapper: Symbol.for("IDtoMapper<DomainModel, DTO>"),
    IRequestBodyValidator: Symbol.for("IRequestBodyValidator<RequestBodyType>"),
    ISanitizer: Symbol.for("ISanitizer<T>"),
    IMiddleware: Symbol.for("IMiddleware"),
    ITokenGenerator: Symbol.for("ITokenGenerator"),
    IVerificationTokenRepository: Symbol.for("IVerificationTokenRepository"),
};

export { TYPES };
