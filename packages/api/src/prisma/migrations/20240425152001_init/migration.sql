-- CreateTable
CREATE TABLE "Project" (
    "projectID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "projectName" TEXT NOT NULL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
