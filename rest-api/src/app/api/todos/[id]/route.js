import { TODOS } from "@/app/mock-data/todos"
import { NextResponse } from "next/server"

export async function GET(request, { params }) {
    const id = (await params).id
    const todo = TODOS.find(todo => todo.id === Number(id))
    if (todo) {
        return NextResponse.json(todo)
    }
    return NextResponse.json({error:'Todo no found'})
}