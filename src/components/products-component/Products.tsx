import "../products-style.css"
import {useEffect, useState} from "react";
import type {IProductModel} from "../../model/ProductModel.ts";
import {loadProducts} from "../../service/api.service.ts";
import {Product} from "../product-component/Product.tsx";

export const Products = () => {
    const [products, setProducts] = useState<IProductModel[]>([]);
    useEffect(() => {
        async function fetchProducts() {
            const allProducts = await loadProducts();
            setProducts(allProducts);
        }

        fetchProducts();
    })
    return (
        <div className={"container"}>
            {
                products.map(product => <Product product={product} key={product.id}/>)
            }
        </div>
    );
};