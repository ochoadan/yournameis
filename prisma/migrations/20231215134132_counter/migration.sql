-- AlterTable
ALTER TABLE "User" ADD COLUMN     "addressesCount" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "allowedAddressesCount" INTEGER NOT NULL DEFAULT 0;
