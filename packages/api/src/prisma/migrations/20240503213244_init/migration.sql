/*
  Warnings:

  - Added the required column `attributes` to the `Functionpoint` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Functionpoint" (
    "fpID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "attributes" TEXT NOT NULL,
    "EI" TEXT NOT NULL,
    "EO" TEXT NOT NULL,
    "EQ" TEXT NOT NULL,
    "ILF" TEXT NOT NULL,
    "ELF" TEXT NOT NULL
);
INSERT INTO "new_Functionpoint" ("EI", "ELF", "EO", "EQ", "ILF", "fpID") SELECT "EI", "ELF", "EO", "EQ", "ILF", "fpID" FROM "Functionpoint";
DROP TABLE "Functionpoint";
ALTER TABLE "new_Functionpoint" RENAME TO "Functionpoint";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
