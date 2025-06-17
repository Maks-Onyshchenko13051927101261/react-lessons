import "./comments-style.css";
import {useEffect, useState} from "react";
import {loadComments} from "../../../service/api.service.ts";
import type {CommentModelI} from "../../../models/CommentModel.ts";
import {Comment} from "../comment-component/Comment.tsx";

export const Comments = () => {
    const [comments, setComments] = useState<CommentModelI[]>([]);
    useEffect(() => {
        async function fetchComments() {
            const allComments = await loadComments();
            setComments(allComments);
        }

        fetchComments();
    })
    return (
        <div className={"container"}>
            {
                comments.map(comment => (<Comment comment={comment} key={comment.id}/>))
            }
        </div>
    );
};