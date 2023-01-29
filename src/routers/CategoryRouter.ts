import { Router } from "express";
import { create, getById, list, remove, update } from "@/controllers/CategoryController";
import modelValidationMiddleware from "@/middlewares/modelValidationMiddleware";
import models from "@/models";

const categoryRouter = Router()

categoryRouter.get("/", list)
categoryRouter.get("/:id", getById)
categoryRouter.post("/", modelValidationMiddleware(models.Category), create)
categoryRouter.put("/:id", modelValidationMiddleware(models.Category), update)
categoryRouter.delete("/:id", remove)

export { categoryRouter };