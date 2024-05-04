/*
  Warnings:

  - You are about to drop the column `EI` on the `Functionpoint` table. All the data in the column will be lost.
  - You are about to drop the column `ELF` on the `Functionpoint` table. All the data in the column will be lost.
  - You are about to drop the column `EO` on the `Functionpoint` table. All the data in the column will be lost.
  - You are about to drop the column `EQ` on the `Functionpoint` table. All the data in the column will be lost.
  - You are about to drop the column `ILF` on the `Functionpoint` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Functionpoint" (
    "fpID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "attributes" TEXT NOT NULL
);
INSERT INTO "new_Functionpoint" ("attributes", "fpID") SELECT "attributes", "fpID" FROM "Functionpoint";
DROP TABLE "Functionpoint";
ALTER TABLE "new_Functionpoint" RENAME TO "Functionpoint";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
