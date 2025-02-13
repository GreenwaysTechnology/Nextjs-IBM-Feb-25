
export async function fetchPhotosById(id) {
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`
    const response = await fetch(url)
    const photo = await response.json()
    return photo
}

export default async function PhotosDetailPage(props) {
    const id = await props.params.id
    const photo = await fetchPhotosById(Number(id))


    return <div>
        <h1>Photos Details Page</h1>
        <h2>Photo Id :{photo.id} </h2>
        <h3>AlbumId : {photo.albumId}</h3>
        <p>{photo.title}</p>
        <p>{photo.thumbnailUrl}</p>
    </div>

}