import "./carsStyles.css"
import {useEffect, useState} from "react";
import type {ICarModel} from "../../models/CarModel.tsx";
import {carServices} from "../../services/api.services.tsx";
import {CarComponent} from "../car-component/CarComponent.tsx";

export const CarsComponent = () => {
    const [cars, setCars] = useState<ICarModel[]>([]);
    useEffect(() => {
        carServices.getAllCars().then(cars => {
            setCars(cars)
        });
    }, [])
    return (
        <div className="cars">{
            cars.map((car) => (<CarComponent car={car} key={car.id}/>
            ))
        }</div>
    );
};