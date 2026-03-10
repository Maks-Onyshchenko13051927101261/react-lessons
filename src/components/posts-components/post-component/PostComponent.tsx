import {type FC, memo} from "react";
import type {IPostModel} from "../../../models/IPostModel.tsx";

type PostPropsType = {
    post:IPostModel;
}
export const PostComponent:FC<PostPropsType> = memo(({post:{id, body}}) => {
    return (
        <div>{id} - {body}</div>
    );
});