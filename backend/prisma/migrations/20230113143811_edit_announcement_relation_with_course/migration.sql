/*
  Warnings:

  - You are about to drop the column `courseId` on the `Announcement` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Courses` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `courseName` to the `Announcement` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Announcement" DROP CONSTRAINT "Announcement_courseId_fkey";

-- AlterTable
ALTER TABLE "Announcement" DROP COLUMN "courseId",
ADD COLUMN     "courseName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Courses_name_key" ON "Courses"("name");

-- AddForeignKey
ALTER TABLE "Announcement" ADD CONSTRAINT "Announcement_courseName_fkey" FOREIGN KEY ("courseName") REFERENCES "Courses"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
