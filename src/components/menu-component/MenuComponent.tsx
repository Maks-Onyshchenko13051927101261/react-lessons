import {Link} from "react-router-dom";

export const MenuComponent = () => {
    return (
        <nav>
            <Link to={"users"}>Users</Link>
            <Link to={"posts"}>Posts</Link>
            <Link to={"comments"}>Comments</Link>
        </nav>
    );
};