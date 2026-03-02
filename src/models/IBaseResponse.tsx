import type {IProductModel} from "./IProductModel.tsx";
import type {IUserModel} from "./IUserModel.tsx";
import type {IRecipeModel} from "./IRecipeModel.tsx";

export interface IBaseResponse {
    total: number;
    skip: number;
    limit: number;
    users?: IUserModel[];
    products?: IProductModel[];
    recipes?: IRecipeModel[];
}