import type {
    IResponseDummyjsonComments,
    IResponseDummyjsonPosts,
    IResponseDummyjsonTodos
} from "../models/ResponseDummyjsonModel.ts";
import type {ITodoModel} from "../models/TodoModel.ts";
import type {IPostModel} from "../models/PostModel.ts";
import type {ICommentModel} from "../models/CommentModel.ts";

const endpoint = import.meta.env.VITE_API_BASE_URL;

const loadTodos = async ():Promise<ITodoModel[]> => {
    const response:IResponseDummyjsonTodos = await fetch(endpoint + "/todos").then(res => res.json());
    return response.todos;
}

const loadPosts = async ():Promise<IPostModel[]> => {
    const response:IResponseDummyjsonPosts = await fetch(endpoint + "/posts").then(res => res.json());
    return response.posts;
}

const loadComments = async ():Promise<ICommentModel[]> => {
    const response:IResponseDummyjsonComments = await fetch(endpoint + "/comments/").then(res => res.json());
    return response.comments;
}

export {loadTodos, loadPosts, loadComments};