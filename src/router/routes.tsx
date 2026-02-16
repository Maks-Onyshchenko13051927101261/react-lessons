import {createBrowserRouter} from "react-router-dom";
import {LayoutPage} from "../pages/layout-page/LayoutPage.tsx";
import {UsersPage} from "../pages/users-page/UsersPage.tsx";
import {PostsPage} from "../pages/posts-page/PostsPage.tsx";
import {CommentsPage} from "../pages/comments-page/CommentsPage.tsx";
import {PlaceholderPage} from "../pages/placeholder-page/PlaceholderPage.tsx";
import {DummyPage} from "../pages/dummy-page/DummyPage.tsx";

export const routes = createBrowserRouter([
    {
        path: "/", element: <LayoutPage/>, children: [
            {
                path: "users", element: <UsersPage/>, children: [
                    {path: "jsonplaceholder", element: <PlaceholderPage/>},
                    {path: "dummyjson", element: <DummyPage/>}
                ]
            },
            {
                path: "posts", element: <PostsPage/>, children: [
                    {path: "jsonplaceholder", element: <PlaceholderPage/>},
                    {path: "dummyjson", element: <DummyPage/>}
                ]
            },
            {
                path: "comments", element: <CommentsPage/>, children: [
                    {path: "jsonplaceholder", element: <PlaceholderPage/>},
                    {path: "dummyjson", element: <DummyPage/>}
                ]
            }
        ]
    }
]);
