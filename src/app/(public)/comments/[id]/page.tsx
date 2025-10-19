import Link from "next/link";

interface Params {
    params: { id: string }
}

async function getComment(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
    return res.json()
}

export default async function CommentPage({ params }: Params) {
    const comment = await getComment(params.id)

    return (
        <div>
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
            <p><b>Email:</b> {comment.email}</p>
            <Link href="/comments">← Назад</Link>
        </div>
    )
}