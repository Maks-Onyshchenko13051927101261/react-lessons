import "./post-style.css"
import type {IPostModel} from "../../../models/PostModel.ts";
import type {FC} from "react";

type PropPost = {
    post: IPostModel
}
export const Post: FC<PropPost> = ({post: {title, body, id}}) => {
    return (
        <div className={"element"}>
            <h3>{id} {title}</h3>
            <p>{body}</p>
        </div>
    );
};