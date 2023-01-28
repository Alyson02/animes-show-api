import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import { ApplicationError } from "@/models/AplicationError"

export function handleApplicationErrors(
    err: Error | ApplicationError,
    _req: Request,
    res: Response,
    next: NextFunction
) {

    switch (err.name) {
        case "notFoundError":
            return res.status(httpStatus.NOT_FOUND).send({ message: err.message })
        case "conflictError":
            return res.status(httpStatus.CONFLICT).send({ message: err.message })
        default:
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message: "Internal Server Error" });
    }
}