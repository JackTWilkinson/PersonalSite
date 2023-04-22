-- CreateTable
CREATE TABLE "CardEntry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "price" REAL NOT NULL,
    "owner" TEXT NOT NULL,
    "copies" INTEGER NOT NULL
);
