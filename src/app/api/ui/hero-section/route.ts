import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const hero = await prisma.hero.findMany();
    const content = hero
      .map((heroContentItem) => heroContentItem.content)
      .flat();
    return NextResponse.json(content);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch Hero Section" },
      { status: 500 },
    );
  }
}
