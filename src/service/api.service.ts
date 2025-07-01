import type {IPostsModule} from "../modules/PostsModule.tsx";


const endpoint = import.meta.env.VITE_API_BASE_URL;

const loadPosts = async (): Promise<IPostsModule[]> => {
    return await fetch(endpoint + "/posts").then(res => res.json());
}

export {loadPosts};