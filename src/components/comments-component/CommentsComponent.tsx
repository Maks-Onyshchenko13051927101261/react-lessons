import {Link} from "react-router-dom";

export const CommentsComponent = () => {
    return (
        <div>
            <h3>Comments</h3>
            <p>make your choice</p>
            <ul>
                <li>
                    <Link to="jsonplaceholder">Jsonplaceholder</Link>
                </li>
                <li>
                    <Link to="dummyjson">dummyjson</Link>
                </li>
            </ul>
        </div>
    );
};