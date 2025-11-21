/*
  Warnings:

  - You are about to drop the column `text` on the `Sales` table. All the data in the column will be lost.
  - Added the required column `text_eng` to the `Sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text_ro` to the `Sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text_ru` to the `Sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text_ukr` to the `Sales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sales" DROP COLUMN "text",
ADD COLUMN     "text_eng" TEXT NOT NULL,
ADD COLUMN     "text_ro" TEXT NOT NULL,
ADD COLUMN     "text_ru" TEXT NOT NULL,
ADD COLUMN     "text_ukr" TEXT NOT NULL;
