import type {IUserWithTokens} from "../models/IUserWithTokens.tsx";
import {retrieveLocalStorage} from "./helpers.tsx";
import axios from "axios";
import {login} from "./api.services.tsx";

const authEndpoint = import.meta.env.VITE_API_BASE_URL + "/auth";

const axiosInstance = axios.create({
    baseURL: authEndpoint,
    headers: {}
})
// функція що відслідковує всі GET запити на сервер та додає хедери для доступу та повертає авторизовану інформацію
axiosInstance.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === "GET") {
        requestObject.headers.Authorization = "Bearer " + retrieveLocalStorage<IUserWithTokens>("user").accessToken
    }
    return requestObject;
})
// перевірка помилок, які отримаємо в наслідок роботи з сервером та робимо refresh токена, якщо виникає помилка аутифікації 401
axiosInstance.interceptors.response.use(
    response => response,
    async error => {
        if (error.response?.status === 401 && !error.config._retry) {
            error.config._retry = true;
            try {
                await login.refresh();
                return axiosInstance(error.config);
            } catch (error) {
                return Promise.reject(error);
            }
        }
        return Promise.reject(error);
    }
)

export default axiosInstance;