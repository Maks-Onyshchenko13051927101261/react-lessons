import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import type {IPostDummy} from "../../models/models-dummy/PostDummy.tsx";
import type {IPostModel} from "../../models/models-placeholder/PostModel.tsx";
import {allPosts} from "../../service/api.service.ts";
import {PostComponent} from "./PostComponent.tsx";

export const PostsComponent = () => {
    const apiLocation = useLocation();
    const [posts, setPosts] = useState<IPostModel[] | IPostDummy[]>([]);
    useEffect(() => {
        if (apiLocation.pathname.includes("jsonplaceholder")) {
            allPosts.placeholder().then(posts => setPosts(posts));
        } else {
            allPosts.dummy().then(posts => setPosts(posts));
        }
    }, [apiLocation.pathname]);
    return (
        <div>{
            posts.map(post => <PostComponent item={post} key={post.id}/>)
        }</div>
    );
};