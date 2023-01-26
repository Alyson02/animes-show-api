-- AlterTable
ALTER TABLE "animes" ADD COLUMN     "authorId" INTEGER;

-- CreateTable
CREATE TABLE "authors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nationalityId" INTEGER NOT NULL,

    CONSTRAINT "authors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "nationalities" (
    "id" SERIAL NOT NULL,
    "country" TEXT NOT NULL,
    "state" TEXT NOT NULL,

    CONSTRAINT "nationalities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "animes" ADD CONSTRAINT "animes_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "authors"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "authors" ADD CONSTRAINT "authors_nationalityId_fkey" FOREIGN KEY ("nationalityId") REFERENCES "nationalities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
