import "./posts.css"
import type {IPostsModule} from "../../modules/PostsModule.tsx";
import {useEffect, useState} from "react";
import {loadPosts} from "../../service/api.service.ts";
import {Post} from "../post/Post.tsx";

export const Posts = () => {
    const [posts, setPosts] = useState<IPostsModule[]>([]);
    useEffect(() => {
        loadPosts().then(data => setPosts(data));
    }, [])
    return (
        <div className="post-container">
            {
                posts.map(post => <Post post={post} key={post.id}/>)
            }
        </div>
    );
};