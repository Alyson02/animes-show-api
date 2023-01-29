
import conflictError from "@/errors/conflictError";
import notFoundError from "@/errors/notFoundError";
import CategoryRepository from "@/repositories/CategoryRepository"
import { Category } from "@prisma/client";

async function list() {
    return await CategoryRepository.list();
}

async function getById(id: number) {
    const category = await CategoryRepository.getById(id);

    if (category === null) throw notFoundError("Category não encontrado!")

    return category;
}

async function create(category: Partial<Category>) {
    const categoryExists = await CategoryRepository.getByDescription(category.description);

    if (categoryExists) conflictError("Um category com esse nome já foi cadastrado")

    return await CategoryRepository.create(category);
}

async function update(id: number, category: Partial<Category>) {
    const nameExists = await CategoryRepository.getByDescription(category.description);

    if (nameExists && nameExists.id != id) conflictError("Um category com esse nome já foi cadastrado")

    const categoryExists = await CategoryRepository.getById(id);
    
    if (categoryExists === null) throw notFoundError("Category não encontrado!")

    return CategoryRepository.update(id, category)
}

async function remove(id: number) {
    const categoryExists = await CategoryRepository.getById(id);

    if (categoryExists === null) throw notFoundError("Category não encontrado!")

    return CategoryRepository.remove(id);
}

export default {
    list,
    getById,
    create,
    update,
    remove
}