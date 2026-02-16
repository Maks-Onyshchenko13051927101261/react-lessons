import {ApiNavigateComponent} from "../../components/navigate-component/NavigateComponent.tsx";
import {Outlet} from "react-router-dom";

export const CommentsPage = () => {
    return (
        <div>
            <h5>Comments:</h5>
            <ApiNavigateComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};