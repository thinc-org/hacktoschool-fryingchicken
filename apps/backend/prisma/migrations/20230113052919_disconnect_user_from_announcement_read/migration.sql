/*
  Warnings:

  - You are about to drop the column `username` on the `AnnouncementRead` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "AnnouncementRead" DROP CONSTRAINT "AnnouncementRead_username_fkey";

-- AlterTable
ALTER TABLE "AnnouncementRead" DROP COLUMN "username";
