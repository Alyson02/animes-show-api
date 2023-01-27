import { Anime } from "@prisma/client";
import { CLIENT_RENEG_LIMIT } from "tls";
import prisma from "../../prisma";

async function list(): Promise<Anime[]> {
    return await prisma.anime.findMany();
}

async function getById(id: number): Promise<Anime> {
    return await prisma.anime.findFirst({ where: { id: id } })
}

async function create(anime: Partial<Anime>): Promise<void> {
    try {
        await prisma.anime.create({ data: anime as Anime })
    } catch (error) {
        throw new Error("teste")
    }
}

async function update(id: number, anime: Partial<Anime>): Promise<void> {
    await prisma.anime.update({ where: { id: id }, data: anime })
}

async function remove(id: number): Promise<void> {
    await prisma.anime.delete({ where: { id: id } })
}

export default {
    list,
    getById,
    create,
    update,
    remove
}