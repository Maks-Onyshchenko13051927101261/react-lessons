import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layout/MainLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {AuthResourcesPage} from "../pages/AuthResourcesPage.tsx";
import {LoginAuthComponent} from "../components/LoginAuthComponent.tsx";

export const Routes = createBrowserRouter([
    {path: "/", element: <MainLayout/>, children:[
            {index: true, element: <HomePage/>},
            {path:"login", element:<LoginPage/>, children:[
                    {path:"login", element:<LoginAuthComponent/>}
                ]},
            {path:"auth/resources", element:<AuthResourcesPage/>}
        ]}
])