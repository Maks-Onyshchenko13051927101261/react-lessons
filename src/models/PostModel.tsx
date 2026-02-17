import type {IReactions} from "./ReactionsModel.tsx";

export interface IPostModel {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: IReactions;
  views: number;
  userId: number;
}