
import conflictError from "@/errors/conflictError";
import notFoundError from "@/errors/notFoundError";
import AuthorRepository from "@/repositories/AuthorRepository"
import { Author } from "@prisma/client";

async function list() {
    return await AuthorRepository.list();
}

async function getById(id: number) {
    const author = await AuthorRepository.getById(id);

    if (author === null) throw notFoundError("Author não encontrado!")

    return author;
}

async function create(author: Partial<Author>) {
    const authorExists = await AuthorRepository.getByName(author.name);

    if (authorExists) conflictError("Um author com esse nome já foi cadastrado")

    return await AuthorRepository.create(author);
}

async function update(id: number, author: Partial<Author>) {
    const nameExists = await AuthorRepository.getByName(author.name);

    if (nameExists && nameExists.id != id) conflictError("Um author com esse nome já foi cadastrado")

    const authorExists = await AuthorRepository.getById(id);
    
    if (authorExists === null) throw notFoundError("Author não encontrado!")

    return AuthorRepository.update(id, author)
}

async function remove(id: number) {
    const authorExists = await AuthorRepository.getById(id);

    if (authorExists === null) throw notFoundError("Author não encontrado!")

    return AuthorRepository.remove(id);
}

export default {
    list,
    getById,
    create,
    update,
    remove
}