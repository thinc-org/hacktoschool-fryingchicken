/*
  Warnings:

  - You are about to drop the column `courseId` on the `AnnouncementRead` table. All the data in the column will be lost.
  - Added the required column `courseId` to the `Announcement` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AnnouncementRead" DROP CONSTRAINT "AnnouncementRead_courseId_fkey";

-- AlterTable
ALTER TABLE "Announcement" ADD COLUMN     "courseId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "AnnouncementRead" DROP COLUMN "courseId";

-- AddForeignKey
ALTER TABLE "Announcement" ADD CONSTRAINT "Announcement_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
