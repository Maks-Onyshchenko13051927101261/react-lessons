import "../products-style.css"
import type {ProductModelI} from "../../model/ProductModel.ts";
import type {FC} from "react";

type PropProd = {
    product:ProductModelI
}
export const Product:FC<PropProd> = ({product:{title,description,category,price,images,meta:{qrCode}}}) => {
    return (
        <div className={"item"}>
            <h3>{title} {category} {price}</h3>
            <p>{description}</p>
            <img src={images.toString()} alt={"images"}/>
            <img src={qrCode} alt={"qrCode"}/>
        </div>
    );
};