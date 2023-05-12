-- CreateTable
CREATE TABLE "cartao" (
    "id" TEXT NOT NULL,
    "nome_titular" TEXT NOT NULL,
    "num_cartao" TEXT NOT NULL,
    "cvv" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "cartao_pkey" PRIMARY KEY ("id")
);
