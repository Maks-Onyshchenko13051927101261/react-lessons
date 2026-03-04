import type {FC} from "react";
import type {IProductModel} from "../../../models/IProductModel.tsx";

type ProductPropsType = {
    product: IProductModel;
}
export const ProductComponent: FC<ProductPropsType> = ({product: {id, title, category, price, images: [firstEl]}}) => {
    return (
        <div className={"item"}>
            <h5>{id}. {title}</h5>
            <img alt={title} src={firstEl} style={{width:"200px", height:"200px", display:"block"}}/>
            <p>{category} {price}</p>
        </div>
    );
};