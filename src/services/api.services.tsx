import type {IUserWithTokens} from "../models/IUserWithTokens.tsx";
import type {IBaseResponse} from "../models/IBaseResponse.tsx";
import type {IProductModel} from "../models/IProductModel.tsx";
import type {ITokenPair} from "../models/ITokenPair.tsx";
import {retrieveLocalStorage} from "./helpers.tsx";
import type {ICartModel} from "../models/ICartModel.tsx";
import axiosInstance from "./api.config.tsx";

type dataType = {
    username: string;
    password: string;
    expiresInMins?: number
}

export const login = {
    response: async ({username, password, expiresInMins}: dataType) => {
        const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>("/login", {
            username,
            password,
            expiresInMins
        });
        localStorage.setItem("user", JSON.stringify(userWithTokens));
    },
    refresh: async () => {
        const userWithTokens = retrieveLocalStorage<IUserWithTokens>("user");
        const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>("/refresh", {
            refreshToken: userWithTokens.refreshToken,
            expiresInMins: 1
        });
        userWithTokens.accessToken = accessToken;
        userWithTokens.refreshToken = refreshToken;
        localStorage.setItem("user", JSON.stringify(userWithTokens));
    }
}

export const getResources = {
    products: async (): Promise<IProductModel[]> => {
        const {data: {products}} = await axiosInstance.get<IBaseResponse>("/products");
        return products || [];
    },
    cart: async (): Promise<ICartModel[]> => {
        const {data: {carts}} = await axiosInstance.get<IBaseResponse>("/cart");
        return carts || [];
    }
}