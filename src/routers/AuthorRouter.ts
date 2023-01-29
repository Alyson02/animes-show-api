import { Router } from "express";
import { create, getById, list, remove, update } from "@/controllers/AuthorController";
import modelValidationMiddleware from "@/middlewares/modelValidationMiddleware";
import models from "@/models";

const authorRouter = Router()

authorRouter.get("/", list)
authorRouter.get("/:id", getById)
authorRouter.post("/", modelValidationMiddleware(models.Author), create)
authorRouter.put("/:id", modelValidationMiddleware(models.Author), update)
authorRouter.delete("/:id", remove)


export { authorRouter };