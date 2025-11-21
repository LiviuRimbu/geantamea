/*
  Warnings:

  - You are about to drop the `ItemTranslation` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description_en` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description_ro` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description_ru` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description_ukr` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ItemTranslation" DROP CONSTRAINT "ItemTranslation_itemId_fkey";

-- AlterTable
ALTER TABLE "Item" ADD COLUMN     "description_en" TEXT NOT NULL,
ADD COLUMN     "description_ro" TEXT NOT NULL,
ADD COLUMN     "description_ru" TEXT NOT NULL,
ADD COLUMN     "description_ukr" TEXT NOT NULL,
ADD COLUMN     "productDetails_en" TEXT[],
ADD COLUMN     "productDetails_ro" TEXT[],
ADD COLUMN     "productDetails_ru" TEXT[],
ADD COLUMN     "productDetails_ukr" TEXT[];

-- DropTable
DROP TABLE "ItemTranslation";
