import { Author } from "@prisma/client";
import prisma from "../../prisma";

async function list(): Promise<Author[]> {
    return await prisma.author.findMany({ include: { anime: true } });
}

async function getById(id: number): Promise<Author> {
    return await prisma.author.findFirst({ where: { id: id }, include: { anime: true } })
}

async function getByName(name: string): Promise<Author> {
    return await prisma.author.findFirst({ where: { name: name } })
}

async function create(author: Partial<Author>): Promise<void> {
    try {
        await prisma.author.create({ data: author as Author })
    } catch (error) {
        throw new Error("teste")
    }
}

async function update(id: number, author: Partial<Author>): Promise<void> {
    await prisma.author.update({ where: { id: id }, data: author })
}

async function remove(id: number): Promise<void> {
    await prisma.author.delete({ where: { id: id } })
}

export default {
    list,
    getById,
    create,
    update,
    remove,
    getByName
}