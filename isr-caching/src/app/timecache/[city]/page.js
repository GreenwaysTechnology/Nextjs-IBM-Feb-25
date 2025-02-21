
//by default no cache is enabled
// export default async function CachePage(props) {
//     //api call to test whether the caching is enabled or no
//     const url = 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
//     const response = await fetch(url)
//     const data = await response.json()

//     return <div>
//         <h1>Caching App</h1>
//         <h1>Time Now: {new Date(data.dateTime).toLocaleTimeString()}</h1>
//     </div>
// }


//route segment options
//to set common revalidation timeout// global revalidation
// export const revalidate = 60

// //enable cache
// export default async function CachePage(props) {
//     //api call to test whether the caching is enabled or no
//     const url = 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
//     //enable e
//     const response = await fetch(url, { cache: 'force-cache', next: { revalidate: 2 } })
//     const data = await response.json()

//     return <div>
//         <h1>Caching App</h1>
//         <h1>Time Now: {new Date(data.dateTime).toLocaleTimeString()}</h1>
//     </div>
// }
// export default async function CachePage(props) {
//     //api call to test whether the caching is enabled or no
//     const url = 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
//     //enable e
//     const response = await fetch(url, { cache: 'force-cache' })
//     const data = await response.json()

//     return <div>
//         <h1>Caching App</h1>
//         <h1>Time Now: {new Date(data.dateTime).toLocaleTimeString()}</h1>
//     </div>
// }

//tag based
export default async function CachePage(props) {
    //api call to test whether the caching is enabled or no
    const url = 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
    //enable e
    const response = await fetch(url, {
        cache: 'force-cache', next: {
            tags: ['timerTag']
        }
    })
    const data = await response.json()

    return <div>
        <h1>Caching App</h1>
        <h1>Time Now: {new Date(data.dateTime).toLocaleTimeString()}</h1>
    </div>
}
export async function generateStaticParams() {
    return [{
        city: 'Kolkata'
    }]
}