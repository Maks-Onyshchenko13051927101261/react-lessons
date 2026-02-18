import type {IUsersResponseModel} from "../models/UsersResponseModel.tsx";
import type {ICartsResponseModel} from "../models/CartsResponseModel.tsx";

const endpoint = import.meta.env.VITE_API_BASE_URL;

export const usersServices = {
    allUsers: async (): Promise<IUsersResponseModel> => {
        return await fetch(endpoint + "/users")
            .then((response) => response.json());
    }
}
export const cartsServices = {
    allCartsOfUser: async (userId: string): Promise<ICartsResponseModel> => {
        return await fetch(endpoint + "/carts/user/" + userId)
            .then((response) => response.json());
    },
}
