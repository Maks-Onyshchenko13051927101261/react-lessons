import type {ICommentUser} from "./CommentUser.tsx";

export interface ICommentDummy {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: ICommentUser;
}