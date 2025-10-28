import {ICar} from "@/models/ICar";
import {getAllCars} from "@/services/api.service";
import {CarComponent} from "@/components/CarComponent";

export const CarsComponent = async () => {

    const cars: ICar[] = await getAllCars()
    return (
        <>
            <h1>Перелік машин</h1>
            <ul>
                {cars.map((car: ICar) => <CarComponent key={car.id} car={car}/>)}
            </ul>
        </>
    );
};