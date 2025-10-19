import Link from "next/link";

interface Params {
    params: { id: string }
}

async function getPost(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return res.json()
}

export default async function PostPage({ params }: Params) {
    const post = await getPost(params.id)

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link href="/posts">← Назад</Link>
        </div>
    )
}