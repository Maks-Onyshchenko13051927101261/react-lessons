import type {IReactions} from "./PostReactionsDummy.tsx";

export interface IPostDummy {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: IReactions;
  views: number;
  userId: number;
}