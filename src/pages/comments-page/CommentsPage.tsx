import {CommentsComponent} from "../../components/comments-component/CommentsComponent.tsx";
import {Outlet} from "react-router-dom";

export const CommentsPage = () => {
    return (
        <div>
            <CommentsComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};