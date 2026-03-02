import {Link} from "react-router";

export const UserSelectionComponent = () => {
    return (
        <nav>
            <Link to="/auth/products">Products</Link>
            <Link to="/auth/recipes">Recipes</Link>
        </nav>
    );
};