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
// функція по роботі з аутифікацією user
export const login = {
    // відправляє дані з форми на endpoint та сервер робить перевірку,
    // якщо користувач існує сервер повертає нам користувача, якого ми записуємо в локальне сховище
    response: async ({username, password, expiresInMins}: dataType) => {
        const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>("/login", {
            username,
            password,
            expiresInMins
        });
        localStorage.setItem("user", JSON.stringify(userWithTokens));
    },
    // коли закінчується час сесії (1 хв. встановлено нами) або виникає помилка з`єднання refresh
    // дістає refreshToken вже з існуючого користувача в нашому локальному сховищі та відправляє його Серверу (на endpoint)
    // отримуючи новий Токен, він перезаписується в нашому існуючому користувачі
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
// передаємо аргументи endpoint та ключ-значення для отримання інформації згідно з тим що обрав користувач для відображення
export const getResources = {
    products: createGetResources<IProductModel>("/products", "products"),
    recipes: createGetResources<IRecipeModel>("/recipes", "recipes"),
}