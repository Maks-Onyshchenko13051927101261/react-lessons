import "./comment.css"
import type {CommentModuleI} from "../../modules/CommentModule.tsx";
import type {FC} from "react";

type PropComment={
    comment: CommentModuleI
}
export const Comment:FC<PropComment> = ({comment:{id,name,email,body}}) => {
    return (
        <div className={"container"}>
            <h3>{id} {name}</h3>
            <p>{email}</p>
            <p>{body}</p>
        </div>
    );
};