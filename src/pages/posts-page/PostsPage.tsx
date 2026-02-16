import {ApiNavigateComponent} from "../../components/navigate-component/NavigateComponent.tsx";
import {Outlet} from "react-router-dom";

export const PostsPage = () => {
    return (
        <div>
            <h5>Posts:</h5>
            <ApiNavigateComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};