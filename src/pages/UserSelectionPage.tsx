import {UserSelectionComponent} from "../components/user-selection-component/UserSelectionComponent.tsx";
import {Outlet} from "react-router";

export const UserSelectionPage = () => {
    return (
        <>
            <UserSelectionComponent/>
            <Outlet/>
        </>
    );
};