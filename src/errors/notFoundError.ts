import { ApplicationError } from "@/models/AplicationError"

export default function notFoundError(message: string): ApplicationError {
    return {
        name: "notFoundError",
        message
    }
}