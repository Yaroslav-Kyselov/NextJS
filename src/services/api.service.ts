import {ICar} from "@/models/ICar";


export const getAllCars = async (): Promise<ICar[]> => {
    return await fetch('http://owu.linkpc.net/carsAPI/v1/cars')
        .then(res => res.json());
}