import type {FC} from "react";
import type {IPostModel} from "../../../models/IPostModel.tsx";

type PostPropsType = {
    post:IPostModel;
}
export const PostComponent:FC<PostPropsType> = ({post:{id, body}}) => {
    return (
        <div>{id} - {body}</div>
    );
};