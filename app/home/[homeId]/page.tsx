export default async function HomePage({params}:any) {
    const homeId = (await params).homeId
    return (
        <div>
            Home Page {homeId}
        </div>
    )
}