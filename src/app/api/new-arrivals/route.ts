import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const items = await prisma.item.findMany({
      where: {
        isNew: true,
        hidden: false,
        available: true,
        gender: { in: ["female", "male"] },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(items);
  } catch (error) {
    console.error("[New Arrivals]", error);
    return NextResponse.json(
      { message: "Unable to load new arrivals." },
      { status: 500 },
    );
  }
}
