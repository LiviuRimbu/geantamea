import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Params = {
  params: {
    id: string;
  };
};

export async function GET(_req: Request, { params }: Params) {
  try {
    const productId = String(params.id);
    const items = await prisma.item.findUnique({
      where: {
        id: productId,
      },
    });

    if (!items) {
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    return NextResponse.json(items);
  } catch (error) {
    console.error("Product ID", error);

    return NextResponse.json(
      { message: "Unable to load new arrivals." },
      { status: 500 },
    );
  }
}
