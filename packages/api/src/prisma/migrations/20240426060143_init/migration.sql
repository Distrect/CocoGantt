-- CreateTable
CREATE TABLE "Task" (
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
    "parentID" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "index" INTEGER NOT NULL,
    "predecessor" TEXT NOT NULL,
    "isMileStone" BOOLEAN NOT NULL,
    "isManual" BOOLEAN NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "projectID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "projectName" TEXT DEFAULT 'New Project',
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Project" ("createdAt", "projectID", "projectName", "updatedAt") SELECT "createdAt", "projectID", "projectName", "updatedAt" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
