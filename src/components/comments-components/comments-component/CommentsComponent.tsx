import {useFetch} from "../../../hooks/useFetch.tsx";
import {endpoint} from "../../../services/api.services.tsx";
import {CommentComponent} from "../comment-component/CommentComponent.tsx";

export const CommentsComponent = () => {
    const {item: comments, error, loading} = useFetch(endpoint.comments);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>...Error</p>;
    return (
        <div>{
            comments.map(comment => (<CommentComponent comment={comment} key={comment.id}/>))
        }</div>
    );
};