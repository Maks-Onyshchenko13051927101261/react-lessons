import type {FC} from "react";
import type {IPostModel} from "../../models/models-placeholder/PostModel.tsx";
import type {IPostDummy} from "../../models/models-dummy/PostDummy.tsx";

type PostPropsType = {
    item: IPostModel | IPostDummy;
}
export const PostComponent: FC<PostPropsType> = ({item: {id, title, body}}) => {
    return (
        <div>
            <h6>{id} {title}</h6>
            <p> {body}</p>
        </div>
    );
};