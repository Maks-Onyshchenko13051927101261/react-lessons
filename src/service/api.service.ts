import type {
    ResponseDummyjsonCommentsI,
    ResponseDummyjsonPostsI,
    ResponseDummyjsonTodosI
} from "../models/ResponseDummyjsonModel.ts";
import type {TodoModelI} from "../models/TodoModel.ts";
import type {PostModelI} from "../models/PostModel.ts";
import type {CommentModelI} from "../models/CommentModel.ts";

const endpoint = import.meta.env.VITE_API_BASE_URL;

const loadTodos = async ():Promise<TodoModelI[]> => {
    const response:ResponseDummyjsonTodosI = await fetch(endpoint + "/todos").then(res => res.json());
    return response.todos;
}

const loadPosts = async ():Promise<PostModelI[]> => {
    const response:ResponseDummyjsonPostsI = await fetch(endpoint + "/posts").then(res => res.json());
    return response.posts;
}

const loadComments = async ():Promise<CommentModelI[]> => {
    const response:ResponseDummyjsonCommentsI = await fetch(endpoint + "/comments/").then(res => res.json());
    return response.comments;
}

export {loadTodos, loadPosts, loadComments};