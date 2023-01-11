/*
  Warnings:

  - You are about to drop the column `userId` on the `Enrolls` table. All the data in the column will be lost.
  - Added the required column `username` to the `Enrolls` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Enrolls" DROP CONSTRAINT "Enrolls_userId_fkey";

-- AlterTable
ALTER TABLE "Courses" ADD COLUMN     "active" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Enrolls" DROP COLUMN "userId",
ADD COLUMN     "username" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "active" SET DEFAULT true;

-- AddForeignKey
ALTER TABLE "Enrolls" ADD CONSTRAINT "Enrolls_username_fkey" FOREIGN KEY ("username") REFERENCES "Users"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
