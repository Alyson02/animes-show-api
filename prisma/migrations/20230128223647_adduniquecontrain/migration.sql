/*
  Warnings:

  - A unique constraint covering the columns `[description]` on the table `categories` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "categories_description_key" ON "categories"("description");
