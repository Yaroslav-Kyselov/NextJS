'use server'

import { redirect } from 'next/navigation';
import {carService} from "@/services/api.service";


export async function createCar(formData: FormData) {
    const brand = formData.get('brand') as string;
    const price = Number(formData.get('price'));
    const year = Number(formData.get('year'));

    if (!brand || !price || !year) {
        throw new Error('Invalid input');
    }

    await carService.create({ brand, price, year });

    redirect('/cars');
}