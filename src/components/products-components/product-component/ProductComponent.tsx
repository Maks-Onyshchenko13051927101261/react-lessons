import type {FC} from "react";
import type {IProductModel} from "../../../models/IProductModel.tsx";

type ProductPropsType = {
    product: IProductModel;
}
export const ProductComponent: FC<ProductPropsType> = ({product: {id, title, category, price, images: [firstEl]}}) => {
    return (
        <div>
            <h5>{id} {title}</h5>
            <img alt={title} src={firstEl}/>
            <p>{category} {price}</p>
        </div>
    );
};