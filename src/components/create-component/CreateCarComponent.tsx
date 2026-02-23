import "./createCar.css"
import {useForm} from "react-hook-form";
import type {ICarModel} from "../../models/CarModel.tsx";
import {joiResolver} from "@hookform/resolvers/joi";
import {addCarValidator} from "../../validator/addCarValidator.tsx";
import {carServices} from "../../services/api.services.tsx";

export const CreateCarComponent = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<ICarModel>({
        mode: "all",
        resolver: joiResolver(addCarValidator)
    });
    const handlerCreateCar = (data: ICarModel) => {
        carServices.addCar(data);
    };
    return (
        <form onSubmit={handleSubmit(handlerCreateCar)}>
            <div>
                <input type="text" {...register("brand")}/>
                <div>{errors.brand?.message}</div>
            </div>
            <div>
                <input type="number" {...register("year")}/>
                <div>{errors.year?.message}</div>
            </div>
            <div>
                <input type="number" {...register("price")}/>
                <div>{errors.price?.message}</div>
            </div>
            <button type="submit">Create</button>
        </form>
    );
};