import "./menuStyles.css"
import {Link} from "react-router";

export const MenuComponent = () => {
    return (
        <ul>
            <li><Link to="cars">Cars</Link></li>
            <li><Link to="cars/create">Add Car</Link></li>
        </ul>
    );
};