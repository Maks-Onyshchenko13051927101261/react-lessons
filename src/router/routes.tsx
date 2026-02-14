import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import {UsersComponent} from "../components/users-component/UsersComponent.tsx";
import {PostsComponent} from "../components/posts-component/PostsComponent.tsx";
import {CommentsComponent} from "../components/comments-component/CommentsComponent.tsx";
import {ProductsComponent} from "../components/products-component/ProductsComponent.tsx";

export const routes = createBrowserRouter([
    {
        path: "/", element: <App/>, children: [
            {path: "users", element: <UsersComponent/>},
            {path: "posts", element: <PostsComponent/>},
            {path: "comments", element: <CommentsComponent/>},
            {path: "products", element: <ProductsComponent/>}
        ]
    }
]);