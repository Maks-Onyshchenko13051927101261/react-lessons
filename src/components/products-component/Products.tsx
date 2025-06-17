import "../products-style.css"
import {useEffect, useState} from "react";
import type {ProductModelI} from "../../model/ProductModel.ts";
import {loadProducts} from "../../service/api.service.ts";
import {Product} from "../product-component/Product.tsx";

export const Products = () => {
    const [products, SetProducts] = useState<ProductModelI[]>([]);
    useEffect(() => {
        async function fetchProducts() {
            const allProducts = await loadProducts();
            SetProducts(allProducts);
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