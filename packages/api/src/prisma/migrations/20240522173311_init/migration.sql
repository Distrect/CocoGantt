/*
  Warnings:

  - You are about to drop the `CAF` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `cafJson` on the `Cocomo` table. All the data in the column will be lost.
  - Added the required column `crashCost` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `crashDay` to the `Task` table without a default value. This is not possible if the table is not empty.
  - Added the required column `normalCost` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CAF";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Task" (
    "taskID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "taskName" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "duration" INTEGER NOT NULL,
    "progress" INTEGER NOT NULL,
    "optimisticTime" INTEGER NOT NULL,
    "mostLikelyTime" INTEGER NOT NULL,
    "pessimisticTime" INTEGER NOT NULL,
    "successProbability" INTEGER NOT NULL,
    "crashDay" INTEGER NOT NULL,
    "crashCost" INTEGER NOT NULL,
    "normalCost" INTEGER NOT NULL,
    "parentID" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "index" INTEGER NOT NULL,
    "predecessor" TEXT NOT NULL,
    "isMileStone" BOOLEAN NOT NULL,
    "isManual" BOOLEAN NOT NULL
);
INSERT INTO "new_Task" ("duration", "endDate", "index", "isManual", "isMileStone", "level", "mostLikelyTime", "optimisticTime", "parentID", "pessimisticTime", "predecessor", "progress", "startDate", "successProbability", "taskID", "taskName") SELECT "duration", "endDate", "index", "isManual", "isMileStone", "level", "mostLikelyTime", "optimisticTime", "parentID", "pessimisticTime", "predecessor", "progress", "startDate", "successProbability", "taskID", "taskName" FROM "Task";
DROP TABLE "Task";
ALTER TABLE "new_Task" RENAME TO "Task";
CREATE TABLE "new_Cocomo" (
    "cocomoID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mode" TEXT NOT NULL
);
INSERT INTO "new_Cocomo" ("cocomoID", "mode") SELECT "cocomoID", "mode" FROM "Cocomo";
DROP TABLE "Cocomo";
ALTER TABLE "new_Cocomo" RENAME TO "Cocomo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
