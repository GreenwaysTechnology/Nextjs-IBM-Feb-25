// export default async function BlogDetailsPage({ params }) {
//     const myparams = (await params)
//     return <div>
//         <h1>Blog Detail Page {JSON.stringify(myparams)}</h1>
//     </div>
// }

export default async function BlogDetailsPage({ params }) {
    const myparams = (await params)
    return <div>
        <h1>Blog Detail Page {JSON.stringify(myparams)}</h1>
    </div>
}