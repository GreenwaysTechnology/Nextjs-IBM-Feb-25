'use client'
import useSWR from "swr"

function fetcher(...args) {
    return fetch(...args).then(res => res.json())
}

export const FetchPostsUsingSWRT = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const { data, error, isLoading } = useSWR(url, fetcher)
    //
    if (error) {
        return <h1>Oops,Something went wrong</h1>
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return <ul>
        {
            data.map(post => {
                return <li key={post.id}>
                    <span>{post.title}</span>
                </li>
            })
        }
    </ul>
}