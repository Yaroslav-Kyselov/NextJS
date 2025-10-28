import {ICar} from "@/models/ICar";
import {FC} from "react";
import Link from "next/link";

type CarsPropsType={
    car:ICar
}

export const CarComponent:FC<CarsPropsType> = ({car}) => {
    return (
        <div>
            <li key={car.id}>

                <Link href={`/cars/${car.id}`}>{car.id}</Link>  {car.brand} -  ({car.year}) : {car.price}$
            </li>

        </div>
    );
};