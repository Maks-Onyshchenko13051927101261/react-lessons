import {useEffect, useState} from "react";
import type {ICarModel} from "../../models/CarModel.tsx";
import {getAllCars} from "../../services/api.services.tsx";
import {CarComponent} from "../car-component/CarComponent.tsx";

export const CarsComponent = () => {
    const [cars, setCars] = useState<ICarModel[]>([]);
    useEffect(() => {
        getAllCars().then(cars => {
            setCars(cars)
            console.log(cars)
        });
    },[])
    return (
        <div>{
            cars.map((car) => (<CarComponent car={car} key={car.id}/>
            ))
        }</div>
    );
};