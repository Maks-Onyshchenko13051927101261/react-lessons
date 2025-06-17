type UserType = {
  id: number;
  username: string;
  fullName: string;
}

export interface CommentModelI {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: UserType;
}