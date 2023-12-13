/*
  Warnings:

  - You are about to drop the column `actions` on the `EmailRoutes` table. All the data in the column will be lost.
  - You are about to drop the column `expression` on the `EmailRoutes` table. All the data in the column will be lost.
  - You are about to drop the column `priority` on the `EmailRoutes` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `EmailRoutes` table. All the data in the column will be lost.
  - Added the required column `createdById` to the `EmailRoutes` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "EmailRoutes" DROP CONSTRAINT "EmailRoutes_userId_fkey";

-- DropIndex
DROP INDEX "EmailRoutes_id_key";

-- DropIndex
DROP INDEX "EmailRoutes_userId_idx";

-- AlterTable
ALTER TABLE "EmailRoutes" DROP COLUMN "actions",
DROP COLUMN "expression",
DROP COLUMN "priority",
DROP COLUMN "userId",
ADD COLUMN     "createdById" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "EmailRoutes" ADD CONSTRAINT "EmailRoutes_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
