import axiosInstance from "./api.config.tsx";
import type {IBaseResponse} from "../models/IBaseResponse.tsx";

export const retrieveLocalStorage = <T, >(key: string) => {
    const object = localStorage.getItem(key) || "";
    if (!object) {
        return {} as T;
    }
    const parse = JSON.parse(object);
    return parse as T;
}

export const createGetResources = <T, >(url: string, key: keyof IBaseResponse) => async ():Promise<T[]> => {
    const {data} = await axiosInstance.get<IBaseResponse>(url);
    return data[key] as T[];

}