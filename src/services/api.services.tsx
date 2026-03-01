import axios from "axios";
import type {IUserWithTokens} from "../models/IUserWithTokens.tsx";

const endpoint = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
    baseURL: endpoint,
    headers: {}
})

type dataType = {
    username: string;
    password: string;
    expiresInMins?: number
}
export const loginResponse = async ({username, password, expiresInMins}: dataType) => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>("/auth/login", {
        username,
        password,
        expiresInMins
    });
    localStorage.setItem("user", JSON.stringify(userWithTokens));
}