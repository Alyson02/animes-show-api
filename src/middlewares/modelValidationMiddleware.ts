import { NextFunction, request } from "express";
import { ObjectSchema } from "joi";
import { Request, Response } from "express";
import result from "http-status"

type ObjectKey = keyof typeof request;

export default function modelValidationMiddleware(schema: ObjectSchema, property: string) {

    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req[property as ObjectKey], { abortEarly: false });

        const valid = error == null;
        if (valid) {
            next();
        } else {
            const { details } = error;
            const message = details.map((i) => i.message);
            console.log("error", message);

            return res.status(result.UNPROCESSABLE_ENTITY).json({
                error: message,
            });
        }

    }
}