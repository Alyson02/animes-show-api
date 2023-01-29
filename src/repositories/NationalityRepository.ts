import { Nationality } from "@prisma/client";
import prisma from "../../prisma";

async function list(): Promise<Nationality[]> {
    return await prisma.nationality.findMany();
}

async function getById(id: number): Promise<Nationality> {
    return await prisma.nationality.findFirst({ where: { id: id } })
}

async function getByCountry(country: string): Promise<Nationality> {
    return await prisma.nationality.findFirst({ where: { country: country } })
}

async function create(nationality: Partial<Nationality>): Promise<void> {
    try {
        await prisma.nationality.create({ data: nationality as Nationality })
    } catch (error) {
        throw new Error("teste")
    }
}

async function update(id: number, nationality: Partial<Nationality>): Promise<void> {
    await prisma.nationality.update({ where: { id: id }, data: nationality })
}

async function remove(id: number): Promise<void> {
    await prisma.nationality.delete({ where: { id: id } })
}

export default {
    list,
    getById,
    create,
    update,
    remove,
    getByCountry
}