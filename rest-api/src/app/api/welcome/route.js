import { NextResponse } from "next/server";

export async function GET(request) {
    //send response
    return NextResponse.json({ message: 'Hello' })
}