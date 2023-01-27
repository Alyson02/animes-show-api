
import AnimeRepository from "@/repositories/AnimeRepository"
import { Anime } from "@prisma/client";

async function list() {
    return await AnimeRepository.list();
}

async function getById(id: number) {
    const anime = await AnimeRepository.getById(id);

    if (anime === null) throw new Error("Anime não encontrado!")

    return anime;
}

async function create(anime: Partial<Anime>) {
    return await AnimeRepository.create(anime);
}

async function update(id: number, anime: Partial<Anime>) {
    return AnimeRepository.update(id, anime)
}

async function remove(id: number) {
    return AnimeRepository.remove(id);
}

export default {
    list,
    getById,
    create,
    update,
    remove
}