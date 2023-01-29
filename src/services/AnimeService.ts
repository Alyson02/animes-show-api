
import conflictError from "@/errors/conflictError";
import notFoundError from "@/errors/notFoundError";
import AnimeRepository from "@/repositories/AnimeRepository"
import { Anime } from "@prisma/client";

async function list() {
    return await AnimeRepository.list();
}

async function getById(id: number) {
    const anime = await AnimeRepository.getById(id);

    if (anime === null) throw notFoundError("Anime não encontrado!")

    return anime;
}

async function create(anime: Partial<Anime>) {
    const animeExists = await AnimeRepository.getByName(anime.name);

    if (animeExists) conflictError("Um anime com esse nome já foi cadastrado")

    return await AnimeRepository.create(anime);
}

async function update(id: number, anime: Partial<Anime>) {
    const nameExists = await AnimeRepository.getByName(anime.name);

    if (nameExists && nameExists.id != id) conflictError("Um anime com esse nome já foi cadastrado")

    const animeExists = await AnimeRepository.getById(id);
    
    if (animeExists === null) throw notFoundError("Anime não encontrado!")

    return AnimeRepository.update(id, anime)
}

async function remove(id: number) {
    const animeExists = await AnimeRepository.getById(id);

    if (animeExists === null) throw notFoundError("Anime não encontrado!")

    return AnimeRepository.remove(id);
}

export default {
    list,
    getById,
    create,
    update,
    remove
}