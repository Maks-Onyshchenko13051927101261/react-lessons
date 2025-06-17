import type {ProductModelI} from "./ProductModel.ts";

export interface ResponseDummyJsonMI {
    products:ProductModelI[];
    total: number;
    skip: number;
    limit: number;
}
