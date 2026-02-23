import axios from "axios";
import type {ICarModel} from "../models/CarModel.tsx";

const endpoint = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
    baseURL: endpoint,
    headers: {"Content-Type": "application/json"},
});

export const getAllCars = async () => {
    const axiosResponse = await axiosInstance.get<ICarModel[]>("/cars");
    return axiosResponse.data;
}

export const addCar = async (car: ICarModel) => {
    await axiosInstance.post("/cars", car);
}