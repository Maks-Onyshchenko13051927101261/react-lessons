import {useEffect, useState} from "react";
import type {IProductModel} from "../../../models/IProductModel.tsx";
import {getResources, login} from "../../../services/api.services.tsx";
import {ProductComponent} from "../product-component/ProductComponent.tsx";

export const ProductsComponent = () => {
    const [products, setProducts] = useState<IProductModel[]>([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
               const data = await getResources.products();
                setProducts(data);
            } catch (e) {
                const error = e as {response?: {status: number}};
                if(error.response?.status === 401){
                    try{
                        await login.refresh();
                        setProducts(await getResources.products());
                    } catch (refreshError) {
                        console.log(refreshError);
                    }
                } else {console.error("something went wrong (not 401):", e);}

            }
        };
        void fetchProducts();
    }, [])
    return (
        <>{
            products.map(product => (<ProductComponent product={product} key={product.id}/>))
        }</>
    );
};