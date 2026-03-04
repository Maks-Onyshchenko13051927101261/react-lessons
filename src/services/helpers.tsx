import axiosInstance from "./api.config.tsx";
import type {IBaseResponse} from "../models/IBaseResponse.tsx";
// парсинг об'єкту що знаходиться в нашому локальному сховищі, звертаємося до нього по ключ значення
export const retrieveLocalStorage = <T, >(key: string) => {
    const object = localStorage.getItem(key) || "null";
    if (!object) {
        return {} as T;
    }
    const parse = JSON.parse(object);
    return parse as T;
}
// функція що приймає в себе два аргументи: endpoint та ключ дістаючи його значенням ключа потрібні дані
export const createGetResources = <T, >(url: string, key: keyof IBaseResponse) => async ():Promise<T[]> => {
    const {data} = await axiosInstance.get<IBaseResponse>(url);
    return data[key] as T[];
}