import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default prisma;

async function main() {
    await prisma.category.createMany({
        data: [
            {
                description: "ação"
            },
            {
                description: "isekai"
            }
        ]
    })

    await prisma.anime.createMany({
        data: [
            {
                name: "Boku no Hero",
                episodes: 24,
                finished: false,
                categoryId: 1,
                imageUrl: "https://sm.ign.com/ign_br/tv/m/my-hero-ac/my-hero-academia_f9ae.jpg"
            },
            {
                name: "Tokyo Revengers",
                episodes: 113,
                finished: false,
                categoryId: 1,
                imageUrl: "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/70975a1227b453c1caf24fa05a93617d.jpe"
            },
            {
                name: "Jujutsu Kaisen",
                episodes: 27,
                finished: false,
                categoryId: 1,
                imageUrl: "https://upload.wikimedia.org/wikipedia/pt/4/4b/Jujutsu_Kaisen_Cover.png"
            },
            {
                name: "Chainsaw Man",
                episodes: 12,
                finished: false,
                categoryId: 1,
                imageUrl: "https://m.media-amazon.com/images/I/51BeRXEKuWL.jpg"
            },
            {
                name: "Kimetsu No Yaba",
                episodes: 44,
                finished: false,
                categoryId: 1,
                imageUrl: "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/d48d4a62b0ac6381c87bd040b69b0a89.jpe"
            },
            {
                name: "Islime Shintara",
                episodes: 44,
                finished: false,
                categoryId: 2,
                imageUrl: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lBhvBqYtR9J8mQPDdnpRcMcte0a.jpg"
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
