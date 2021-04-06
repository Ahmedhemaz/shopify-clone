export interface IMiddleware<Request, Response> {
    execute(req: Request, res: Response, next: any): void;
}