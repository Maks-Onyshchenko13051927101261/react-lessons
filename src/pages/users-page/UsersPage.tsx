import {Outlet} from "react-router-dom";
import {NavigateComponent} from "../../components/navigate-component/NavigateComponent.tsx";

export const UsersPage = () => {
    return (
        <div>
            <p>Users:</p>
            <NavigateComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};