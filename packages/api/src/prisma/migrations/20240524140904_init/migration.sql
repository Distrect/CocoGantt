-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Functionpoint" (
    "fpID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "attributes" TEXT NOT NULL DEFAULT '{}',
    "caf" TEXT NOT NULL DEFAULT '{}',
    "foreignProjectID" INTEGER,
    CONSTRAINT "Functionpoint_foreignProjectID_fkey" FOREIGN KEY ("foreignProjectID") REFERENCES "Project" ("projectID") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Functionpoint" ("attributes", "foreignProjectID", "fpID") SELECT "attributes", "foreignProjectID", "fpID" FROM "Functionpoint";
DROP TABLE "Functionpoint";
ALTER TABLE "new_Functionpoint" RENAME TO "Functionpoint";
CREATE UNIQUE INDEX "Functionpoint_foreignProjectID_key" ON "Functionpoint"("foreignProjectID");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
