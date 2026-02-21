import {Link} from "react-router-dom";
import "./menuStyles.css"
export const MenuComponent = () => {
    return (
        <div className="menu">
            <h5>Menu:</h5>
            <ul>
                <li>
                    <Link to="users">Users</Link>
                </li>
            </ul>
            <hr/>
        </div>
    );
};