import {useEffect, useState} from "react";
import type {IPostModel} from "../../models/PostModel.tsx";
import {apiServices} from "../../services/api.service.ts";
import {PostComponent} from "./PostComponent.tsx";

export const PostsComponent = () => {
    const [posts, setPosts] = useState<IPostModel[]>([]);
    useEffect(() => {
        apiServices.allPosts().then(posts => setPosts(posts))
    }, []);
    return (
        <>{
            posts.map(post => <PostComponent item={post} key={post.id}/>)
        }</>
    );
};