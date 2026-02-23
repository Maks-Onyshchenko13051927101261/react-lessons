import {MenuComponent} from "../components/menu-component/MenuComponent.tsx";
import {Outlet} from "react-router";

export const MainLayout = () => {
    return (
        <div>
            <MenuComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};