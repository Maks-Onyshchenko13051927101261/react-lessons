import type {IProductModel} from "./ProductModel.ts";

export interface IResponseDummyJsonM {
    products:IProductModel[];
    total: number;
    skip: number;
    limit: number;
}
