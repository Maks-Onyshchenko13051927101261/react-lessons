import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layout/MainLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {UserSelectionPage} from "../pages/UserSelectionPage.tsx";
import {ProductsPage} from "../pages/ProductsPage.tsx";
import {RecipesPage} from "../pages/RecipesPage.tsx";

export const Routes = createBrowserRouter([
    {path: "/", element: <MainLayout/>, children:[
            {index: true, element: <HomePage/>},
            {path:"login", element:<LoginPage/>, children:[
                    {path:"resources", element:<UserSelectionPage/>}
                ]},
            {path:"auth/products", element:<ProductsPage/>},
            {path:"auth/recipes", element:<RecipesPage/>}
        ]}
])