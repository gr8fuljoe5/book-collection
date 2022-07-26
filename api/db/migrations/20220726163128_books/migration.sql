-- CreateTable
CREATE TABLE "Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT NOT NULL,
    "image" TEXT,
    "cover" BOOLEAN,
    "dateAdded" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
