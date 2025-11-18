import Link from "next/link";
import {API_URL} from "@/services/api.service";

interface Params {
    params:Promise< { id: string }>
}

async function getCar(id: string) {
    const res = await fetch(`${API_URL}/cars/${id}`)
    return res.json()
}

export default async function CarPage({ params }: Params) {
    const {id}=await params;
    const car = await getCar(id)

    return (
        <div>
            <h1>{car.brand}</h1>
            <p><b>Вартість:</b> {car.price}</p>
            <p><b>Рік випуску:</b> {car.year}</p>

            <Link href="/cars">← Назад</Link>
        </div>
    )
}