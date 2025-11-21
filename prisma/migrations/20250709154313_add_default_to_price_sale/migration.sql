/*
  Warnings:

  - Made the column `weight` on table `Item` required. This step will fail if there are existing NULL values in that column.
  - Made the column `width` on table `Item` required. This step will fail if there are existing NULL values in that column.
  - Made the column `height` on table `Item` required. This step will fail if there are existing NULL values in that column.
  - Made the column `depth` on table `Item` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "isFeatured" DROP NOT NULL,
ALTER COLUMN "isNew" DROP NOT NULL,
ALTER COLUMN "weight" SET NOT NULL,
ALTER COLUMN "weight" SET DEFAULT 0,
ALTER COLUMN "width" SET NOT NULL,
ALTER COLUMN "width" SET DEFAULT 0,
ALTER COLUMN "height" SET NOT NULL,
ALTER COLUMN "height" SET DEFAULT 0,
ALTER COLUMN "depth" SET NOT NULL,
ALTER COLUMN "depth" SET DEFAULT 0,
ALTER COLUMN "pricePurchase" DROP NOT NULL,
ALTER COLUMN "priceSale" SET DEFAULT 0,
ALTER COLUMN "info" SET DEFAULT '',
ALTER COLUMN "about" SET DEFAULT '',
ALTER COLUMN "description_en" SET DEFAULT '',
ALTER COLUMN "description_ro" SET DEFAULT '',
ALTER COLUMN "description_ru" SET DEFAULT '',
ALTER COLUMN "description_ukr" SET DEFAULT '',
ALTER COLUMN "productDetails_en" SET DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "productDetails_ro" SET DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "productDetails_ru" SET DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "productDetails_ukr" SET DEFAULT ARRAY[]::TEXT[];
