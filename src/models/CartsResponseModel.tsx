import type {ICartModel} from "./CartModel.tsx";

export interface ICartsResponseModel {
    total: number;
    skip: number;
    limit: number;
    carts: ICartModel[];
}