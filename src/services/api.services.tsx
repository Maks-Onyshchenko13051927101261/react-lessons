import type {IUserModel} from "../models/IUserModel.tsx";

const baseUrl = "https://jsonplaceholder.typicode.com"

export const endpoint = {
    users: async ():Promise<IUserModel[]> => {
        return await fetch(`${baseUrl}/users`)
            .then(res => res.json());
    }
}