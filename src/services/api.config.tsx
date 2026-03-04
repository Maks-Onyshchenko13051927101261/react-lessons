import type {IUserWithTokens} from "../models/IUserWithTokens.tsx";
import {retrieveLocalStorage} from "./helpers.tsx";
import axios from "axios";
import {login} from "./api.services.tsx";

const authEndpoint = import.meta.env.VITE_API_BASE_URL + "/auth";

const axiosInstance = axios.create({
    baseURL: authEndpoint,
    headers: {}
})

axiosInstance.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === "GET") {
        requestObject.headers.Authorization = "Bearer " + retrieveLocalStorage<IUserWithTokens>("user").accessToken
    }
    return requestObject;
})

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