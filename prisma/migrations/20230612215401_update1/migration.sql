/*
  Warnings:

  - Added the required column `cardName` to the `CardEntry` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CardEntry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cardName" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "owner" TEXT NOT NULL,
    "copies" INTEGER NOT NULL
);
INSERT INTO "new_CardEntry" ("copies", "id", "owner", "price") SELECT "copies", "id", "owner", "price" FROM "CardEntry";
DROP TABLE "CardEntry";
ALTER TABLE "new_CardEntry" RENAME TO "CardEntry";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
