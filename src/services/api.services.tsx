import type {IUsersResponseModel} from "../models/UsersResponseModel.tsx";

const endpoint = import.meta.env.VITE_API_BASE_URL;

export const usersServices = {
    getAllUsers: async (page: string): Promise<IUsersResponseModel> => {
        const limit = 30;
        const skip = (+page - 1) * limit
        return await fetch(endpoint + "/users" + "?skip=" + skip)
            .then((res) => res.json())
    }
}
