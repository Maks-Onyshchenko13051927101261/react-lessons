import axios from "axios";

const baseEndpoint = import.meta.env.VITE_API_BASE_URL;

export const axiosInstance = axios.create({
    baseURL: baseEndpoint,
    headers: {}
})

export const response = <T, >(endpoint: string) => async (): Promise<T[]> => {
    const axiosResponse = await axiosInstance.get<T[]>(endpoint)
    return axiosResponse.data
}