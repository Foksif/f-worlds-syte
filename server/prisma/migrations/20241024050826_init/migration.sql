-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Acces" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "age" TEXT NOT NULL,
    "whois" TEXT NOT NULL,
    "plans" TEXT NOT NULL,
    "experience" TEXT NOT NULL,
    "telegram" TEXT NOT NULL,
    "isdone" BOOLEAN DEFAULT false,

    CONSTRAINT "Acces_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");
