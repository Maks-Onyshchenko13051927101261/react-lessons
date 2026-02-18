import {createBrowserRouter} from "react-router-dom";
import {LayoutPage} from "../layout/LayoutPage.tsx";
import {UsersPage} from "../pages/users-page/UsersPage.tsx";
import {CartsPage} from "../pages/carts-page/CartsPage.tsx";

export const routes = createBrowserRouter([
    {path:"/", element: <LayoutPage/>, children:[
            {path:"users", element: <UsersPage/>, children:[
                    {path:":id/carts", element:<CartsPage/>}
                ]}
        ]}
])