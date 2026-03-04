import {ProductComponent} from "../product-component/ProductComponent.tsx";
import {getResources} from "../../../services/api.services.tsx";
import {useFetch} from "../../../services/fetchHook.tsx";

export const ProductsComponent = () => {
    const {loading, error, data: products} = useFetch(getResources.products)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Try to login again...</p>;
    return (
        <div className={"container"}>{
            products.map(product => (<ProductComponent product={product} key={product.id}/>))
        }</div>
    );
};