import type {FC} from "react";
import type {ICommentModel} from "../../../models/ICommentModel.tsx";

type CommentPropsType = {
    comment:ICommentModel;
}
export const CommentComponent:FC<CommentPropsType> = ({comment:{id, body}}) => {
    return (
        <div>{id} - {body}</div>
    );
};