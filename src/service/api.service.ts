import type {IProductModel} from "../model/ProductModel.ts";
import type {IResponseDummyJsonM} from "../model/ResponseDummyJsonM.ts";

const endpoint = import.meta.env.VITE_API_BASE_URL;

const loadProducts = async (): Promise<IProductModel[]> => {
    const response: IResponseDummyJsonM = await fetch(endpoint + "/products").then((response) => response.json());
    return response.products;
}

export {loadProducts};