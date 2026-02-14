import "./menuStyles.css"
import {Link} from "react-router-dom";

export const MenuComponent = () => {
    return (
        <ul>
            <li>
                <Link to="users">Users</Link>
            </li>
            <li>
                <Link to="posts">Posts</Link>
            </li>
            <li>
                <Link to="comments">Comments</Link>
            </li>
            <li>
                <Link to="products">Products</Link>
            </li>
        </ul>
    );
};