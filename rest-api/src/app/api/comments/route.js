import { NextResponse } from "next/server"

const url = `https://jsonplaceholder.typicode.com/comments`
export async function GET(request) {
    const response = await fetch(url)
    const comments = await response.json()
    return NextResponse.json(comments)
}
//create new Comment
export async function POST(request) {
    try {
        const comment = await request.json()
        const response = await fetch(url, {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
        const newComment = await response.json()
        //status code
        return new NextResponse(JSON.stringify(newComment), {
            status: 201, headers: {
                'Content-Type': 'application/json',
                'url': '/api/create'
            }
        })
    }
    catch (err) {
        return new NextResponse({ err: err }, { status: 500 })
    }
}