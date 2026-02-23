import {createBrowserRouter} from "react-router";
import {MainLayout} from "../layout/MainLayout.tsx";
import {CarsPage} from "../pages/cars-page/CarsPage.tsx";
import {CreateCarPage} from "../pages/create-page/CreateCarPage.tsx";

export const routes = createBrowserRouter([
    {
        path: "/", element: <MainLayout/>, children: [
            {path: "cars", element: <CarsPage/>},
            {path: "cars/create", element: <CreateCarPage/>}
        ]
    }
])