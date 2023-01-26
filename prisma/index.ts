import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default prisma;

async function main() {
    await prisma.anime.createMany({
        data: [
            {
                name: "Boku no Hero",
                episodes: 24,
                finished: false,
            },
            {
                name: "Tokyo Revengers",
                episodes: 113,
                finished: false,
            },
            {
                name: "Jujutsu Kaisen",
                episodes: 27,
                finished: false,
            },
            {
                name: "Chainsaw Man",
                episodes: 12,
                finished: false,
            },
            {
                name: "Kimetsu No Yaba",
                episodes: 44,
                finished: false,
            },
        ],
    });
}

main()
    .then(async () => {
        console.log("seed finish!");
    })
    .catch(async (e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
