import {Link, Outlet} from "react-router-dom";
import "./layoutStyles.css"

export const LayoutComponent = () => {
    return (
        <div>
            <ul>
                <li><Link to="users">Users</Link></li>
                <li><Link to="posts">Posts</Link></li>
            </ul>
            <hr/>
            <Outlet/>
        </div>
    );
};