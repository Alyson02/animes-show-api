import { Router } from "express";
import { create, getById, list, remove, update } from "@/controllers/AnimeController";
import modelValidationMiddleware from "@/middlewares/modelValidationMiddleware";
import models from "@/models";

const animeRouter = Router()

animeRouter.get("/", list)
animeRouter.get("/:id", getById)
animeRouter.post("/", modelValidationMiddleware(models.Anime), create)
animeRouter.put("/:id", modelValidationMiddleware(models.Anime), update)
animeRouter.delete("/:id", remove)


export { animeRouter };