import {ICar} from "@/models/ICar";
export const API_URL = 'http://185.69.152.209/carsAPI/v1';

export const carService = {
    async getAllCars(): Promise<ICar[]> {
        const res = await fetch(`${API_URL}/cars`, { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch cars');
        return res.json();
    },

    async createOneCar(carData: Omit<ICar, 'id'>): Promise<ICar> {
        const res = await fetch(`${API_URL}/cars`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(carData),
        });
        if (!res.ok) throw new Error('Failed to create car');
        return res.json();
    },
};
