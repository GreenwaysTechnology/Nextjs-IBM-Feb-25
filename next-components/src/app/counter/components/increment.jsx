// 'use client'

import { useState } from "react"

export function Increment() {
    const [value, setValue] = useState(0)
    return <>
        <h1>Value : {value}</h1>
        <button onClick={() => {
            setValue(value + 1)
        }}>+</button>
    </>
}