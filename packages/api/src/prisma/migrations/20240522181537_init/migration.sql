-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Functionpoint" (
    "fpID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "attributes" TEXT NOT NULL,
    "foreignProjectID" INTEGER,
    CONSTRAINT "Functionpoint_foreignProjectID_fkey" FOREIGN KEY ("foreignProjectID") REFERENCES "Project" ("projectID") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Functionpoint" ("attributes", "foreignProjectID", "fpID") SELECT "attributes", "foreignProjectID", "fpID" FROM "Functionpoint";
DROP TABLE "Functionpoint";
ALTER TABLE "new_Functionpoint" RENAME TO "Functionpoint";
CREATE UNIQUE INDEX "Functionpoint_foreignProjectID_key" ON "Functionpoint"("foreignProjectID");
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
    "isManual" BOOLEAN NOT NULL,
    "foreignProjectID" INTEGER,
    CONSTRAINT "Task_foreignProjectID_fkey" FOREIGN KEY ("foreignProjectID") REFERENCES "Project" ("projectID") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Task" ("crashCost", "crashDay", "duration", "endDate", "foreignProjectID", "index", "isManual", "isMileStone", "level", "mostLikelyTime", "normalCost", "optimisticTime", "parentID", "pessimisticTime", "predecessor", "progress", "startDate", "successProbability", "taskID", "taskName") SELECT "crashCost", "crashDay", "duration", "endDate", "foreignProjectID", "index", "isManual", "isMileStone", "level", "mostLikelyTime", "normalCost", "optimisticTime", "parentID", "pessimisticTime", "predecessor", "progress", "startDate", "successProbability", "taskID", "taskName" FROM "Task";
DROP TABLE "Task";
ALTER TABLE "new_Task" RENAME TO "Task";
CREATE UNIQUE INDEX "Task_foreignProjectID_key" ON "Task"("foreignProjectID");
CREATE TABLE "new_Cocomo" (
    "cocomoID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mode" TEXT NOT NULL,
    "kloc" INTEGER NOT NULL,
    "foreignProjectID" INTEGER,
    CONSTRAINT "Cocomo_foreignProjectID_fkey" FOREIGN KEY ("foreignProjectID") REFERENCES "Project" ("projectID") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Cocomo" ("cocomoID", "foreignProjectID", "kloc", "mode") SELECT "cocomoID", "foreignProjectID", "kloc", "mode" FROM "Cocomo";
DROP TABLE "Cocomo";
ALTER TABLE "new_Cocomo" RENAME TO "Cocomo";
CREATE UNIQUE INDEX "Cocomo_foreignProjectID_key" ON "Cocomo"("foreignProjectID");
CREATE TABLE "new_TeamMember" (
    "teamID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "memberName" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "foreignProjectID" INTEGER,
    CONSTRAINT "TeamMember_foreignProjectID_fkey" FOREIGN KEY ("foreignProjectID") REFERENCES "Project" ("projectID") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_TeamMember" ("foreignProjectID", "memberName", "teamID", "title") SELECT "foreignProjectID", "memberName", "teamID", "title" FROM "TeamMember";
DROP TABLE "TeamMember";
ALTER TABLE "new_TeamMember" RENAME TO "TeamMember";
CREATE UNIQUE INDEX "TeamMember_foreignProjectID_key" ON "TeamMember"("foreignProjectID");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
