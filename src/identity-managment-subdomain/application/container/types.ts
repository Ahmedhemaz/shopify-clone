const SERVICES = {
    RegisterUserController: Symbol.for('RegisterUserController'),
    IDtoMapper: Symbol.for("IDtoMapper<DomainModel, DTO>"),
    IRequestBodyValidator: Symbol.for("IRequestBodyValidator<RequestBodyType>"),
    ISanitizer: Symbol.for("ISanitizer<T>"),
    IMiddleware: Symbol.for("IMiddleware"),
}

export { SERVICES };