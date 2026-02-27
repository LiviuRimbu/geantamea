-- DropForeignKey
ALTER TABLE "public"."CartItem" DROP CONSTRAINT "CartItem_customerId_fkey";

-- AlterTable
ALTER TABLE "public"."Customer" ADD COLUMN     "cartItems" TEXT[];
