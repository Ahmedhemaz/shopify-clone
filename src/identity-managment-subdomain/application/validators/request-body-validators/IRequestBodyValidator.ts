export interface IRequestBodyValidator<RequestBodyType> {
    isRequestBodyValid(body: RequestBodyType): boolean;
}