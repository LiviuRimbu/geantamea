/*
  Warnings:

  - Made the column `pricePurchase` on table `Item` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "pricePurchase" SET NOT NULL,
ALTER COLUMN "pricePurchase" SET DEFAULT 0;
