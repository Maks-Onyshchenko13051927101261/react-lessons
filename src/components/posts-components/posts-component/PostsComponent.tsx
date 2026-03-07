import {useFetch} from "../../../hooks/useFetch.tsx";
import {endpoint} from "../../../services/api.services.tsx";
import {PostComponent} from "../post-component/PostComponent.tsx";

export const PostsComponent = () => {
    const {item: posts, error, loading} = useFetch(endpoint.posts);
    if (loading) return <div>Loading...</div>;
    if (error) return <div>...Error</div>;
    return (
        <div>{
            posts.map((post) => (<PostComponent post={post} key={post.id}/>))
        }</div>
    );
};