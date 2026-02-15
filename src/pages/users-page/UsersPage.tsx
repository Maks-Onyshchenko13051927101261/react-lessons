import {UsersComponent} from "../../components/user-components/UsersComponent.tsx";
import {Outlet} from "react-router-dom";

export const UsersPage = () => {
    return (
        <>
            <p>Users:</p>
            <UsersComponent/>
            <hr/>
            <Outlet/>
        </>
    );
};