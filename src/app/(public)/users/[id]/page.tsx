import Link from "next/link";

interface Params {
    params: { id: string }
}

async function getUser(id: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    return res.json()
}

export default async function UserPage({ params }: Params) {
    const user = await getUser(params.id)

    return (
        <div>
            <h1>{user.name}</h1>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Телефон:</b> {user.phone}</p>
            <p><b>Сайт:</b> {user.website}</p>
            <Link href="/users">← Назад</Link>
        </div>
    )
}