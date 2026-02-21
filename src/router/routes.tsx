import {createBrowserRouter} from "react-router-dom";
import {UsersPage} from "../pages/users-page/UsersPage.tsx";
import {MainLayout} from "../layout/MainLayout.tsx";
import {PaginationLayout} from "../layout/PaginationLayout.tsx";

export const routes = createBrowserRouter([
    {path:"/", element:<MainLayout/>, children:[
            {path:"/",element:<PaginationLayout/>, children:[
                    {path:"users", element:<UsersPage/>}
                ]}
        ]}
])