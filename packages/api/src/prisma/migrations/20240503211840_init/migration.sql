/*
  Warnings:

  - Added the required column `cafJson` to the `Cocomo` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cocomo" (
    "cocomoID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mode" TEXT NOT NULL,
    "cafJson" TEXT NOT NULL
);
INSERT INTO "new_Cocomo" ("cocomoID", "mode") SELECT "cocomoID", "mode" FROM "Cocomo";
DROP TABLE "Cocomo";
ALTER TABLE "new_Cocomo" RENAME TO "Cocomo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
