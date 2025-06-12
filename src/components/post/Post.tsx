import type {FC} from "react";
import type {PostsModuleI} from "../../modules/PostsModule.tsx";

type PostProps = {
    post: PostsModuleI
}
export const Post: FC<PostProps> = ({post: {id, title, body}}) => {
    return (
        <div>
            <h3>{id} {title}</h3>
            <p>{body}</p>
        </div>
    );
};