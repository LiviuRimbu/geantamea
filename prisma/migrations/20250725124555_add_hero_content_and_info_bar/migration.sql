-- CreateTable
CREATE TABLE "Sales" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "Sales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hero" (
    "id" SERIAL NOT NULL,
    "content" TEXT[],

    CONSTRAINT "Hero_pkey" PRIMARY KEY ("id")
);
