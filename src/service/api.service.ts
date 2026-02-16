import {urls} from "../constants/urls.ts";
import type {IUserModel} from "../models/models-placeholder/UserModel.tsx";
import type {IUserDummy} from "../models/models-dummy/UsersDummy.tsx";
import type {IPostModel} from "../models/models-placeholder/PostModel.tsx";
import type {IPostDummy} from "../models/models-dummy/PostDummy.tsx";
import type {ICommentModel} from "../models/models-placeholder/CommentModel.tsx";
import type {ICommentDummy} from "../models/models-dummy/CommentDummy.tsx";

export const allUsers = {
    placeholder: async (): Promise<IUserModel[]> => await fetch(urls.users.usersPlaceholder)
        .then(res => res.json()),
    dummy: async (): Promise<IUserDummy[]> => await fetch(urls.users.usersDummy)
        .then((res) => res.json()).then(data => data.users),
}
export const allPosts = {
    placeholder: async (): Promise<IPostModel[]> => await fetch(urls.posts.postsPlaceholder)
        .then(res => res.json()),
    dummy: async (): Promise<IPostDummy[]> => await fetch(urls.posts.postsDummy)
        .then((res) => res.json()).then(data => data.posts),
}
export const allComments = {
    placeholder: async (): Promise<ICommentModel[]> => await fetch(urls.comments.commentsPlaceholder)
        .then(res => res.json()),
    dummy: async (): Promise<ICommentDummy[]> => await fetch(urls.comments.commentsDummy)
        .then((res) => res.json()).then(data => data.comments),
}