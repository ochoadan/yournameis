-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isAllowedToSignIn" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "EmailRoutes" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "fromEmail" TEXT NOT NULL,
    "toEmail" TEXT NOT NULL,
    "priority" INTEGER NOT NULL DEFAULT 20,
    "description" TEXT NOT NULL,
    "expression" TEXT NOT NULL,
    "actions" TEXT[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmailRoutes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Domains" (
    "id" SERIAL NOT NULL,
    "domain" TEXT NOT NULL,

    CONSTRAINT "Domains_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EmailRoutes_id_key" ON "EmailRoutes"("id");

-- CreateIndex
CREATE UNIQUE INDEX "EmailRoutes_fromEmail_key" ON "EmailRoutes"("fromEmail");

-- CreateIndex
CREATE UNIQUE INDEX "EmailRoutes_toEmail_key" ON "EmailRoutes"("toEmail");

-- CreateIndex
CREATE INDEX "EmailRoutes_userId_idx" ON "EmailRoutes"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Domains_domain_key" ON "Domains"("domain");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- AddForeignKey
ALTER TABLE "EmailRoutes" ADD CONSTRAINT "EmailRoutes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
