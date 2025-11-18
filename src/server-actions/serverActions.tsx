'use server'

import { redirect } from 'next/navigation';
import {carService} from "@/services/api.service";
import {ICar} from "@/models/ICar";


export async function createCar(data: ICar) {
    await carService.createOneCar({
        brand: data.brand,
        price: data.price,
        year: data.year,
    });

    redirect('/cars');
}