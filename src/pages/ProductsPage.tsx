import {useEffect} from "react";
import {getResources} from "../services/api.services.tsx";

export const ProductsPage = () => {
    useEffect(() => {
        getResources.products().then(data => console.log(data));
    }, []);
    return (
        <>products</>
    );
};