type ReactionsType = {
  likes: number;
  dislikes: number;
}

export interface IPostModel {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: ReactionsType;
  views: number;
  userId: number;
}