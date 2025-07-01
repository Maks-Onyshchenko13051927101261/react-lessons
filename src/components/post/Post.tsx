import type {FC} from "react";
import type {IPostsModule} from "../../modules/PostsModule.tsx";

type PostProps = {
    post: IPostsModule
}
export const Post: FC<PostProps> = ({post: {id, title, body}}) => {
    return (
        <div>
            <h3>{id} {title}</h3>
            <p>{body}</p>
        </div>
    );
};