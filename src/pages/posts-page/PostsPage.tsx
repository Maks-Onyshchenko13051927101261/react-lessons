import {PostsComponent} from "../../components/posts-component/PostsComponent.tsx";
import {Outlet} from "react-router-dom";

export const PostsPage = () => {
    return (
        <div>
            <PostsComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};