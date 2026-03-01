import type {IProductModel} from "./IProductModel.tsx";
import type {IUserModel} from "./IUserModel.tsx";
import type {ICartModel} from "./ICartModel.tsx";

export interface IBaseResponse {
    total: number;
    skip: number;
    limit: number;
    users?: IUserModel[];
    products?: IProductModel[];
    carts?: ICartModel[];
}