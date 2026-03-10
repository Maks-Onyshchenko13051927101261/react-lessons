import {useAppDispatch} from "../../redux/hooks/useAppDispatch.tsx";
import {useAppSelector} from "../../redux/hooks/useAppSelector.tsx";
import {useEffect} from "react";
import {userActions} from "../../redux/slices/userSlice/userSlice.tsx";
import {postActions} from "../../redux/slices/postSlice/postSlice.tsx";
import {commentAction} from "../../redux/slices/commentSlice/commentSlice.tsx";
import {UserComponent} from "../users-components/user-component/UserComponent.tsx";
import {PostComponent} from "../posts-components/post-component/PostComponent.tsx";
import {CommentComponent} from "../comments-components/comment-component/CommentComponent.tsx";

export const ComplexComponent = () => {
    const dispatch = useAppDispatch();

    // Тепер ми підписані точково
    const users = useAppSelector(state => state.userStoreSlice.users);
    const posts = useAppSelector(state => state.postStoreSlice.posts);
    const comments = useAppSelector(state => state.commentStoreSlice.comments);

    useEffect(() => {
        if (!users.length) dispatch(userActions.loadUsers());
        if (!posts.length) dispatch(postActions.loadPosts());
        if (!comments.length) dispatch(commentAction.loadComments());
    }, [dispatch, users.length, posts.length, comments.length]);

    return (
        <div>
            <div>{users.map(user => <UserComponent key={user.id} user={user}/>)}</div>
            <hr/>
            <div>{posts.map(post => <PostComponent key={post.id} post={post}/>)}</div>
            <hr/>
            <div>{comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}</div>
        </div>
    );
};