'use client'

import MyServer from "./myserver"

export const MyClient = (props) => {
    return <div>
        <h1>Client Component</h1>
        {/* <MyServer/> */}
        {props.children}
    </div>
}