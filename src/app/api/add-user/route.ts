import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

function convertBigIntToString(obj: any): any {
  if (typeof obj === "bigint") {
    return obj.toString();
  } else if (Array.isArray(obj)) {
    return obj.map(convertBigIntToString);
  } else if (obj !== null && typeof obj === "object") {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        key,
        convertBigIntToString(value),
      ])
    );
  }
  return obj;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { name, phone } = await request.json();

    const newUser = await prisma.user.create({
      data: {
        name,
        phone,
      },
    });

    return NextResponse.json(convertBigIntToString(newUser));
  } catch (error) {
    console.error("Error adding user:", error);
    return NextResponse.json({ error: "Failed to add user" }, { status: 500 });
  }
}
