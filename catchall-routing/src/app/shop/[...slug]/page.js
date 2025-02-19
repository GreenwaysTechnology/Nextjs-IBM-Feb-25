export default async function ShopDetailPage({ params }) {
    const myparams = (await params)
    return <div>
        <h1>Shop Detail Page {JSON.stringify(myparams)}</h1>
    </div>
}