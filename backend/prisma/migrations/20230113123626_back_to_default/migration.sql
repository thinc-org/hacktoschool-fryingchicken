/*
  Warnings:

  - You are about to drop the column `isRead` on the `Announcement` table. All the data in the column will be lost.
  - Added the required column `username` to the `AnnouncementRead` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Announcement" DROP COLUMN "isRead";

-- AlterTable
ALTER TABLE "AnnouncementRead" ADD COLUMN     "isRead" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "username" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "AnnouncementRead" ADD CONSTRAINT "AnnouncementRead_username_fkey" FOREIGN KEY ("username") REFERENCES "Users"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
