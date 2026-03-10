import type {IUserModel} from "../models/IUserModel.tsx";
import type {IPostModel} from "../models/IPostModel.tsx";
import type {ICommentModel} from "../models/ICommentModel.tsx";
import {response} from "./api.config.tsx";


export const endpoint = {
    users: response<IUserModel>("/users"),
    posts: response<IPostModel>("/posts"),
    comments: response<ICommentModel>("/comments"),
}