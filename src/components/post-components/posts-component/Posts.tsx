import "./posts-style.css"
import {useEffect, useState} from "react";
import {loadPosts} from "../../../service/api.service.ts";
import {Post} from "../post-component/Post.tsx";
import type {PostModelI} from "../../../models/PostModel.ts";

export const Posts = () => {
    const [posts, setPosts] = useState<PostModelI[]>([]);
    useEffect(() => {
        async function fetchPosts(){
            const allPosts = await loadPosts();
            setPosts(allPosts);
        }
        fetchPosts();
    }, [])
    return (
        <div className={"container"}>
            {
                posts.map(post => (<Post post={post} key={post.id} />))
            }
        </div>
    );
};