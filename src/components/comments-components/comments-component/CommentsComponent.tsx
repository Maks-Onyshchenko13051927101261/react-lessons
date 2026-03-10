import {CommentComponent} from "../comment-component/CommentComponent.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {commentAction} from "../../../redux/slices/commentSlice/commentSlice.tsx";

export const CommentsComponent = () => {
    const dispatch = useAppDispatch();
    const {comments, isLoading, error} = useAppSelector(state => state.commentStoreSlice);
    useEffect(() => {
        dispatch(commentAction.loadComments());
    }, [dispatch, comments.length]);
    if (isLoading) return <p>Завантаження...</p>;
    if (error) return <p>Ой! Сталася помилка: {error}</p>;
    return (
        <div>{
            comments.map(comment => (<CommentComponent comment={comment} key={comment.id}/>))
        }</div>
    );
};