import type {FC} from "react";
import type {ICommentModel} from "../../models/models-placeholder/CommentModel.tsx";
import type {ICommentDummy} from "../../models/models-dummy/CommentDummy.tsx";

type CommentPropsType = {
    item: ICommentModel | ICommentDummy
}

export const CommentComponent: FC<CommentPropsType> = ({item:{id, body}}) => {
    return (
        <div>{id} {body}</div>
    );
};