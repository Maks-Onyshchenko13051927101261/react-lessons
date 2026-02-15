import {LayoutComponent} from "../../components/layout-components/LayoutComponent.tsx";
import {Outlet} from "react-router-dom";

export const LayoutPage = () => {
    return (
        <>
            <LayoutComponent/>
            <hr/>
            <Outlet/>
        </>
    );
};