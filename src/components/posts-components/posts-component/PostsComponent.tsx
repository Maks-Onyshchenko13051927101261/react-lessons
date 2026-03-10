import {PostComponent} from "../post-component/PostComponent.tsx";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {postActions} from "../../../redux/slices/postSlice/postSlice.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";

export const PostsComponent = () => {
    const dispatch = useAppDispatch();
    const {posts, isLoading, error} = useAppSelector(state => state.postStoreSlice);
    useEffect(() => {
        dispatch(postActions.loadPosts());
    }, [dispatch]);
    if (isLoading) return <p>Завантаження...</p>;
    if (error) return <p>Ой! Сталася помилка: {error}</p>;
    return (
        <div>{
            posts.map((post) => (<PostComponent post={post} key={post.id}/>))
        }</div>
    );
};