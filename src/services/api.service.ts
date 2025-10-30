import {ICar} from "@/models/ICar";
const API_URL = 'http://owu.linkpc.net/carsAPI/v1';

// export const getAllCars = async (): Promise<ICar[]> => {
//     return await fetch('http://owu.linkpc.net/carsAPI/v1/cars')
//         .then(res => res.json());
// }


export const carService = {
    async getAllCars(): Promise<ICar[]> {
        const res = await fetch(`${API_URL}/cars`, { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch cars');
        return res.json();
    },

    async create(carData: Omit<ICar, 'id'>): Promise<ICar> {
        const res = await fetch(`${API_URL}/cars`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(carData),
        });
        if (!res.ok) throw new Error('Failed to create car');
        return res.json();
    },
};
