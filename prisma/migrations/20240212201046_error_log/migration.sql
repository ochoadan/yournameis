-- CreateTable
CREATE TABLE "errorLog" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT,

    CONSTRAINT "errorLog_pkey" PRIMARY KEY ("id")
);
