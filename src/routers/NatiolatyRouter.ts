import { Router } from "express";
import { create, getById, list, remove, update } from "@/controllers/NationalityController";
import modelValidationMiddleware from "@/middlewares/modelValidationMiddleware";
import models from "@/models";

const nationalityRouter = Router()

nationalityRouter.get("/", list)
nationalityRouter.get("/:id", getById)
nationalityRouter.post("/", modelValidationMiddleware(models.Nationality), create)
nationalityRouter.put("/:id", modelValidationMiddleware(models.Nationality), update)
nationalityRouter.delete("/:id", remove)


export { nationalityRouter };