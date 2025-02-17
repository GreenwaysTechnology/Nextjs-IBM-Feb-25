import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(request) {
    //connect to prisma 
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
}