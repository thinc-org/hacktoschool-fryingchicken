/*
  Warnings:

  - You are about to drop the column `instructorId` on the `Courses` table. All the data in the column will be lost.
  - Added the required column `instructorName` to the `Courses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Courses" DROP COLUMN "instructorId",
ADD COLUMN     "instructorName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_instructorName_fkey" FOREIGN KEY ("instructorName") REFERENCES "Users"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
