import {Link} from "react-router-dom";

export const NavigateComponent = () => {
    return (
        <ul>
            <li><Link to="jsonplaceholder">placeholder</Link></li>
            <li><Link to="dummyjson">dummy</Link></li>
        </ul>
    );
};