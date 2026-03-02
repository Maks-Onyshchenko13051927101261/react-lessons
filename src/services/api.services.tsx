import axiosInstance from "./api.config.tsx";
import {createGetResources, retrieveLocalStorage} from "./helpers.tsx";
import type {IUserWithTokens} from "../models/IUserWithTokens.tsx";
import type {ITokenPair} from "../models/ITokenPair.tsx";
import type {IRecipeModel} from "../models/IRecipeModel.tsx";
import type {IProductModel} from "../models/IProductModel.tsx";

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
    products: createGetResources<IProductModel>("/products", "products"),
    recipes: createGetResources<IRecipeModel>("/recipes", "recipes"),
}