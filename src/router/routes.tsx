import {LayoutPage} from "../pages/layout-page/LayoutPage.tsx";
import {createBrowserRouter} from "react-router-dom";
import {PostsPage} from "../pages/posts-page/PostsPage.tsx";
import {UsersPage} from "../pages/users-page/UsersPage.tsx";

export const routes = createBrowserRouter([
    {
        path: "/", element: <LayoutPage/>, children: [
            {path: "users", element: <UsersPage/>},
            {path: "posts", element: <PostsPage/>}
        ]
    }
]);