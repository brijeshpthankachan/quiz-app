-- CreateTable
CREATE TABLE "Pet" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "age" INTEGER,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);
