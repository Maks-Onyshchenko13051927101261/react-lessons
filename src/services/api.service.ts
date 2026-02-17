import {urlsApi} from "../constants/urls.ts";
import type {IUserModel} from "../models/UserModel.tsx";

export const apiServices = {
    allUsers: async ():Promise<IUserModel[]> => await fetch(urlsApi.users)
        .then(res => res.json())
        .then(data => data.users),
    allPosts: async () => await fetch(urlsApi.posts)
        .then(res => res.json())
        .then(data => data.posts)
}