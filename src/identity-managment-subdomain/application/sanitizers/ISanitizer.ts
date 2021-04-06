import { Request, Response } from "express";

export interface ISanitizer<T> {
    sanitize(req: Request, res: Response, next: any): void;
}