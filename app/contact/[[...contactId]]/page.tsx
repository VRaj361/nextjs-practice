export default async function ContactPage({params}: any) {
    const contactId = (await params).contactId
    return (
        <div>
            contact Page {JSON.stringify(contactId)}
        </div>
    )
}