import type {FC} from "react";
import type {ICarModel} from "../../models/CarModel.tsx";

type CarPropsType = {
    car: ICarModel,
}
export const CarComponent: FC<CarPropsType> = ({car: {brand, price, year}}) => {
    return (
        <ul>
            <li><p>"Your ad could be here"</p></li>
            <li>Brand: {brand}, year: {year}</li>
            <li>price: {price} UAH</li>
        </ul>
    );
};