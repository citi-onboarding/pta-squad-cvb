/*
  Warnings:

  - Added the required column `tipopet` to the `Consulta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Consulta" ADD COLUMN     "tipopet" TEXT NOT NULL;
