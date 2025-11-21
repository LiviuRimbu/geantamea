-- DropForeignKey
ALTER TABLE "AccessoryDetail" DROP CONSTRAINT "AccessoryDetail_itemId_fkey";

-- AddForeignKey
ALTER TABLE "AccessoryDetail" ADD CONSTRAINT "AccessoryDetail_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE CASCADE ON UPDATE CASCADE;
