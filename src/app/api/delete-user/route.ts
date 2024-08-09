import prisma from "@/lib/prisma";
import { log } from "console";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest): Promise<NextResponse> => {
  const { number } = await request.json();
  return prisma.user
    .delete({
      where: { id: 14, phone: number },
    })
    .then(() => {
      log("deleted");
      return NextResponse.json("user deleted successfully");
    })
    .catch((error) => {
      log("some error", error);
      return NextResponse.json(error);
    });
};
