import {ProductComponent} from "../product-component/ProductComponent.tsx";
import {getResources} from "../../../services/api.services.tsx";
import {useLoader} from "../../../services/hookLoader.tsx";

export const ProductsComponent = () => {
    const {loading, error, data: products} = useLoader(getResources.products)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Try to login again...</p>;
    return (
        <>{
            products.map(product => (<ProductComponent product={product} key={product.id}/>))
        }</>
    );
};