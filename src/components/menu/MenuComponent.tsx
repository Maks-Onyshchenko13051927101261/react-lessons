import {Link} from "react-router-dom";
import "./menuStyles.css"

export const MenuComponent = () => {
    return (
        <ul>
            <li><Link to={"users"}>Users</Link></li>
        </ul>
    );
};