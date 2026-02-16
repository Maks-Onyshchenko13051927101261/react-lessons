import {useEffect, useState} from "react";
import type {ICommentModel} from "../../models/models-placeholder/CommentModel.tsx";
import type {ICommentDummy} from "../../models/models-dummy/CommentDummy.tsx";
import {useLocation} from "react-router-dom";
import {allComments} from "../../service/api.service.ts";
import {CommentComponent} from "./CommentComponent.tsx";

export const CommentsComponent = () => {
    const apiLocation = useLocation();
    const [comments, setComments] = useState<ICommentModel[] | ICommentDummy[]>([]);
    useEffect(() => {
        if (apiLocation.pathname.includes("jsonplaceholder")) {
            allComments.placeholder().then(comments => setComments(comments));
        } else {
            allComments.dummy().then(comments => setComments(comments));
        }
    }, [apiLocation.pathname]);
    return (
        <div>{
            comments.map(comment => <CommentComponent item={comment} key={comment.id}/>)
        }</div>
    );
};