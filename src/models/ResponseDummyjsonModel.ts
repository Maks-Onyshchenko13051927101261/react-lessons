import type {ICommentModel} from "./CommentModel.ts";
import type {IPostModel} from "./PostModel.ts";
import type {ITodoModel} from "./TodoModel.ts";

export interface IResponseDummyjsonComments {
  comments: ICommentModel[];
  total: number;
  skip: number;
  limit: number;
}

export interface IResponseDummyjsonPosts {
    posts: IPostModel[];
    total: number;
    skip: number;
    limit: number;
}

export interface IResponseDummyjsonTodos {
    todos: ITodoModel[];
    total: number;
    skip: number;
    limit: number;
}