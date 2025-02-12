'use client' //directive
import { useState } from "react"
import { Comments } from "./comments"

export function Review() {
    const [like, setLike] = useState(0)
    return <div>
        <h1>Review</h1>
        <h2>Like {like}</h2>
        <button onClick={() => {
            setLike(like + 1)
        }}>+</button>
        {/* Inside client component we use Server Component */}
        <Comments/>
    </div>
}