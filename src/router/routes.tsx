import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {UsersPage} from "../pages/users-page/UsersPage.tsx";
import {PostsPage} from "../pages/posts-page/PostsPage.tsx";
import {CommentsPage} from "../pages/comments-page/CommentsPage.tsx";

export const routes = createBrowserRouter([
    {
        path: "/", element: <App/>, children: [
            {path: "users", element: <UsersPage/>, children: [
                    {path:"jsonplaceholder", element:<div>jsonplaceholder</div>},
                    {path:"dummyjson", element:<div>dummyjson</div>}
                ]},
            {path: "posts", element: <PostsPage/>, children:[
                    {path:"jsonplaceholder", element:<div>jsonplaceholder</div>},
                    {path:"dummyjson", element:<div>dummyjson</div>}
                ]},
            {path: "comments", element: <CommentsPage/>, children:[
                    {path:"jsonplaceholder", element:<div>jsonplaceholder</div>},
                    {path:"dummyjson", element:<div>dummyjson</div>}
                ]},
        ]
    }
]);