import {UsersComponent} from "../user-components/UsersComponent.tsx";
import {useLocation} from "react-router-dom";
import {PostsComponent} from "../post-components/PostsComponent.tsx";
import {CommentsComponent} from "../comment-components/CommentsComponent.tsx";

export const PlaceholderComponent = () => {
    const pageLocation = useLocation();

    if (pageLocation.pathname.includes("/users")) {
        return <UsersComponent/>;
    } else if (pageLocation.pathname.includes("/posts")) {
        return <PostsComponent/>;
    } else {
        return <CommentsComponent/>;
    }
};