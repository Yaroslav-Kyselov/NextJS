import Link from "next/link";

interface Params {
    params: { id: string }
}

async function getCar(id: string) {
    const res = await fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`)
    return res.json()
}

export default async function CarPage({ params }: Params) {
    const car = await getCar(params.id)

    return (
        <div>
            <h1>{car.brand}</h1>
            <p><b>Вартість:</b> {car.price}</p>
            <p><b>Рік випуску:</b> {car.year}</p>

            <Link href="/cars">← Назад</Link>
        </div>
    )
}