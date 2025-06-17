import type {ProductModelI} from "../model/ProductModel.ts";
import type {ResponseDummyJsonMI} from "../model/ResponseDummyJsonM.ts";

const endpoint = import.meta.env.VITE_API_BASE_URL;

const loadProducts = async (): Promise<ProductModelI[]> => {
    const response: ResponseDummyJsonMI = await fetch(endpoint + "/products").then((response) => response.json());
    return response.products;
}

export {loadProducts};