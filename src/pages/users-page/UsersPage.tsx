import {Outlet} from "react-router-dom";
import {ApiNavigateComponent} from "../../components/navigate-component/NavigateComponent.tsx";

export const UsersPage = () => {
    return (
        <div>
            <h5>Users:</h5>
            <ApiNavigateComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};
