'use client'
import { useState, useEffect } from 'react'

export const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        console.log('client side')
        async function fetchPostDetails() {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const response = await fetch(url)
            const posts = await response.json()
            setPosts((myposts) => {
                return posts.concat(myposts)
            })
        }

        fetchPostDetails();

    }, [])
    return <>
        <h1>Posts</h1>
        <ul>
            {
                posts.map(post => {
                    return <li key={post.id}>
                        <span>{post.title}</span>
                    </li>
                })
            }
        </ul>
    </>
}