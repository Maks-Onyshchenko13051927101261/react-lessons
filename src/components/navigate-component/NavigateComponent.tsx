import {Link} from "react-router-dom";

export const ApiNavigateComponent = () => {
    return (
        <ul>
            <li><Link to="jsonplaceholder">placeholder</Link></li>
            <li><Link to="dummyjson">dummy</Link></li>
        </ul>
    );
};
export const LayoutNavigateComponent = () => {
    return (
        <ul>
            <li><Link to="users">Users</Link></li>
            <li><Link to="posts">Posts</Link></li>
            <li><Link to="comments">Comments</Link></li>
        </ul>
    )
}