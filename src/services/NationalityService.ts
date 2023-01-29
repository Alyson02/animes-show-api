
import conflictError from "@/errors/conflictError";
import notFoundError from "@/errors/notFoundError";
import NationalityRepository from "@/repositories/NationalityRepository"
import { Nationality } from "@prisma/client";

async function list() {
    return await NationalityRepository.list();
}

async function getById(id: number) {
    const nationality = await NationalityRepository.getById(id);

    if (nationality === null) throw notFoundError("Nationality não encontrado!")

    return nationality;
}

async function create(nationality: Partial<Nationality>) {
    const nationalityExists = await NationalityRepository.getByCountry(nationality.country);

    if (nationalityExists) conflictError("Um nationality com esse nome já foi cadastrado")

    return await NationalityRepository.create(nationality);
}

async function update(id: number, nationality: Partial<Nationality>) {
    const nameExists = await NationalityRepository.getByCountry(nationality.country);

    if (nameExists && nameExists.id != id) conflictError("Uma Nationality com esse nome já foi cadastrado")

    const nationalityExists = await NationalityRepository.getById(id);

    if (nationalityExists === null) throw notFoundError("Nationality não encontrado!")

    return NationalityRepository.update(id, nationality)
}

async function remove(id: number) {
    const nationalityExists = await NationalityRepository.getById(id);

    if (nationalityExists === null) throw notFoundError("Nationality não encontrado!")

    return NationalityRepository.remove(id);
}

export default {
    list,
    getById,
    create,
    update,
    remove
}