import "./comments.css"
import type {ICommentModule} from "../../modules/CommentModule.tsx";
import {Comment} from "../comment-component/Comment.tsx";
import {loadComments} from "../../service/api.service.ts";
import {useEffect, useState} from "react";

export const Comments = () => {
    const [comments, setComments] = useState<ICommentModule[]>([]);
    useEffect(() => {
        async function fetchComments() {
            const allComments = await loadComments();
            setComments(allComments);
        }

        fetchComments();
    }, [])
    return (
        <div>
            {
                comments.map((comment) => <Comment comment={comment} key={comment.id}/>)
            }
        </div>
    );
};