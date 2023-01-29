import { Category } from "@prisma/client";
import prisma from "../../prisma";

async function list(): Promise<Category[]> {
    return await prisma.category.findMany();
}

async function getById(id: number): Promise<Category> {
    return await prisma.category.findFirst({ where: { id: id } })
}

async function getByDescription(description: string): Promise<Category> {
    return await prisma.category.findFirst({ where: { description: description } })
}

async function create(category: Partial<Category>): Promise<void> {
    try {
        await prisma.category.create({ data: category as Category })
    } catch (error) {
        throw new Error("teste")
    }
}

async function update(id: number, category: Partial<Category>): Promise<void> {
    await prisma.category.update({ where: { id: id }, data: category })
}

async function remove(id: number): Promise<void> {
    await prisma.category.delete({ where: { id: id } })
}

export default {
    list,
    getById,
    create,
    update,
    remove,
    getByDescription
}