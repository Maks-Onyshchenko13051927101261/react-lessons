import type {IUserWithTokens} from "../models/IUserWithTokens.tsx";
import {retrieveLocalStorage} from "./helpers.tsx";
import axios from "axios";

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

export default axiosInstance;