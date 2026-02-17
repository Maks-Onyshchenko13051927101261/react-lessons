import type {FC} from "react";
import type {IPostModel} from "../../models/PostModel.tsx";

type PostPropsType = {
    item: IPostModel
}
export const PostComponent:FC<PostPropsType> = ({item:{id, title, body}}) => {
    return (
        <div>{id} {title} {body}</div>
    );
};