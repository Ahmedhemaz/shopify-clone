// edit types to concerete class
const TYPES = {
    IDbConnectionOptions: Symbol.for("IDbConnectionOptions"),
    IDbHandler: Symbol.for("IDbHandler"),
    UniqueEntityId: Symbol.for("UniqueEntityId"),
    IHashService: Symbol.for("IHashService"),
    IAuthenticationService: Symbol.for("IAuthenticationService"),
    IUserRepository: Symbol.for('IUserRepository'),
    IDataModelMapper: Symbol.for("IDataMapper"),
    RegisterUserRequestBodyValidator: Symbol.for("RegisterUserRequestBodyValidator"),
    IMiddleware: Symbol.for("IMiddleware"),
    
};
 
export { TYPES };
 