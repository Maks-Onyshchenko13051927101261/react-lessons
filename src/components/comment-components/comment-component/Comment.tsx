import "./comment-style.css"
import type {CommentModelI} from "../../../models/CommentModel.ts";
import type {FC} from "react";

type PropComment = {
    comment: CommentModelI
}
export const Comment: FC<PropComment> = ({comment: {body, postId, likes, user: {id, username, fullName}}}) => {
    return (
        <div className={"element"}>
            <h3>{id} {username} {fullName}</h3>
            <p>{body} {postId} {likes}</p>
        </div>
    );
};