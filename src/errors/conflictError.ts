import { ApplicationError } from "@/models/AplicationError"

export default function conflictError(message: string): ApplicationError {
    return {
        name: "conflictError",
        message
    }
}