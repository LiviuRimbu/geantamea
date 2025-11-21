/*
  Warnings:

  - You are about to drop the column `text_eng` on the `Sales` table. All the data in the column will be lost.
  - You are about to drop the column `text_ro` on the `Sales` table. All the data in the column will be lost.
  - You are about to drop the column `text_ru` on the `Sales` table. All the data in the column will be lost.
  - You are about to drop the column `text_ukr` on the `Sales` table. All the data in the column will be lost.
  - Added the required column `name_en` to the `Sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_ro` to the `Sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_ru` to the `Sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name_ukr` to the `Sales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sales" DROP COLUMN "text_eng",
DROP COLUMN "text_ro",
DROP COLUMN "text_ru",
DROP COLUMN "text_ukr",
ADD COLUMN     "name_en" TEXT NOT NULL,
ADD COLUMN     "name_ro" TEXT NOT NULL,
ADD COLUMN     "name_ru" TEXT NOT NULL,
ADD COLUMN     "name_ukr" TEXT NOT NULL;
