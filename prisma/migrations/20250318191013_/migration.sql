/*
  Warnings:

  - You are about to drop the column `id` on the `Project` table. All the data in the column will be lost.
  - The primary key for the `Social` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Social` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Social` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Social` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Project_id_key";

-- DropIndex
DROP INDEX "Social_id_key";

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "id",
ADD COLUMN     "email" TEXT NOT NULL,
ADD CONSTRAINT "Project_pkey" PRIMARY KEY ("email");

-- AlterTable
ALTER TABLE "Social" DROP CONSTRAINT "Social_pkey",
DROP COLUMN "id",
ADD COLUMN     "email" TEXT NOT NULL,
ADD CONSTRAINT "Social_pkey" PRIMARY KEY ("email");

-- CreateIndex
CREATE UNIQUE INDEX "Project_email_key" ON "Project"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Social_email_key" ON "Social"("email");
