import axios from "axios";
import type {IUserModel} from "../models/IUserModel.tsx";
import type {IPostModel} from "../models/IPostModel.tsx";
import type {ICommentModel} from "../models/ICommentModel.tsx";
import {response} from "./helpers.tsx";

const baseEndpoint = import.meta.env.VITE_API_BASE_URL;

export const axiosInstance = axios.create({
    baseURL: baseEndpoint,
    headers: {}
})

export const endpoint = {
    users: response<IUserModel>("/users"),
    posts: response<IPostModel>("/posts"),
    comments: response<ICommentModel>("/comments"),
}