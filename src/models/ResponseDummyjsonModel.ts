import type {CommentModelI} from "./CommentModel.ts";
import type {PostModelI} from "./PostModel.ts";
import type {TodoModelI} from "./TodoModel.ts";

export interface ResponseDummyjsonCommentsI {
  comments: CommentModelI[];
  total: number;
  skip: number;
  limit: number;
}

export interface ResponseDummyjsonPostsI {
    posts: PostModelI[];
    total: number;
    skip: number;
    limit: number;
}

export interface ResponseDummyjsonTodosI {
    todos: TodoModelI[];
    total: number;
    skip: number;
    limit: number;
}