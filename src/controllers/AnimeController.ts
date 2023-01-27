import { NextFunction, Request, Response } from "express";
import service from "@/services/AnimeService"
import { Anime } from "@prisma/client";
import httpStatus from "http-status";
import {} from '@/routers'

export async function list(req: Request, res: Response) {
    return res.send(await service.list());
}
export async function getById(req: Request, res: Response, next: NextFunction) {
    return res.send(await service.getById(Number(req.params.id)));
}
export async function create(req: Request, res: Response) {
    await service.create(req.body as Partial<Anime>)
    return res.sendStatus(httpStatus.CREATED);
}
export async function update(req: Request, res: Response) {
    await service.update(Number(req.params.id), req.body as Partial<Anime>)
    return res.sendStatus(httpStatus.NO_CONTENT);
}
export async function remove(req: Request, res: Response) {
    await service.remove(Number(req.params.id))
    return res.sendStatus(httpStatus.NO_CONTENT);
}