import {createBrowserRouter} from "react-router-dom";
import {LayoutPage} from "../pages/layout-page/LayoutPage.tsx";
import {UsersPage} from "../pages/users-page/UsersPage.tsx";
import {PostsPage} from "../pages/posts-page/PostsPage.tsx";
import {CommentsPage} from "../pages/comments-page/CommentsPage.tsx";

export const routes = createBrowserRouter([
    {
        path: "/", element: <LayoutPage/>, children: [
            {path: "users", element: <UsersPage/>, children:[
                    {path:"jsonplaceholder", element:<div>jsonplaceholder</div>},
                    {path:"dummyjson", element:<div>dummyjson</div>}
                ]},
            {path: "posts", element: <PostsPage/>},
            {path: "comments", element: <CommentsPage/>}
        ]
    }
]);
