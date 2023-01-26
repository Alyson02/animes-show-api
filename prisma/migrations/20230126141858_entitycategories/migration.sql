/*
  Warnings:

  - You are about to drop the `Anime` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Anime";

-- CreateTable
CREATE TABLE "animes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "episodes" INTEGER NOT NULL,
    "finished" BOOLEAN NOT NULL,
    "imageUrl" TEXT NOT NULL DEFAULT '',
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "animes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "animes_name_key" ON "animes"("name");

-- CreateIndex
CREATE UNIQUE INDEX "animes_categoryId_key" ON "animes"("categoryId");

-- AddForeignKey
ALTER TABLE "animes" ADD CONSTRAINT "animes_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
