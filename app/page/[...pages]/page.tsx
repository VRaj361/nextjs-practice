export default async function Page({params}:any) {
    const fda = (await params).pages
    console.log(fda)
    return (
        <div>
            Page main
            {JSON.stringify(fda)}
        </div>
    )
}