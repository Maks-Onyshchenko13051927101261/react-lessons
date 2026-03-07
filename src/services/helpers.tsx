import {axiosInstance} from "./api.services.tsx";

export const response = <T, >(endpoint: string) => async (): Promise<T[]> => {
    const axiosResponse = await axiosInstance.get<T[]>(endpoint)
    return axiosResponse.data
}