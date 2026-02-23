import "./carStyles.css"
import type {FC} from "react";
import type {ICarModel} from "../../models/CarModel.tsx";

type CarPropsType = {
    car: ICarModel,
}
export const CarComponent: FC<CarPropsType> = ({car: {brand, price, year}}) => {
    return (
        <div className="carsCard">
            <p>"Your ad could be here"</p>
            <h5>{brand}, {year}</h5>
            <p>price: {price} UAH</p>
        </div>
    );
};