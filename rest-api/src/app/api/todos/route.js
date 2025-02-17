import { TODOS } from "@/app/mock-data/todos";
import { NextResponse } from "next/server";

export async function GET(request) {
    return NextResponse.json(TODOS)
}

//post data
export async function POST(request) {
    const payload = await request.json()
    if (payload) {
        console.log(payload)
        return NextResponse.json({ message: 'got Data' })
    }
    return NextResponse.json({ message: 'Something went wrong' })
}