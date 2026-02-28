import {Link} from "react-router";

export const MenuComponent = () => {
    return (
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"login"}>Login</Link></li>
        </ul>
    );
};