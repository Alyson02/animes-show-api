import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";

export function handleApplicationErrors(
    err: Error,
    _req: Request,
    res: Response,
    next: NextFunction
) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: "InternalServerError",
        message: "Internal Server Error",
    });
}