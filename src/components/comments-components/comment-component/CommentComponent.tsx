import {type FC, memo} from "react";
import type {ICommentModel} from "../../../models/ICommentModel.tsx";

type CommentPropsType = {
    comment:ICommentModel;
}
export const CommentComponent:FC<CommentPropsType> = memo(({comment:{id, body}}) => {
    return (
        <div>{id} - {body}</div>
    );
});