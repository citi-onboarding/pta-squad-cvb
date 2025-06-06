-- CreateTable
CREATE TABLE "Consulta" (
    "id" SERIAL NOT NULL,
    "nomepet" TEXT NOT NULL,
    "nomedono" TEXT NOT NULL,
    "nomedr" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "tipodaconsulta" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "horario" TIMESTAMP(3) NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "Consulta_pkey" PRIMARY KEY ("id")
);
