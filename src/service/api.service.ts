import type {ICommentModule} from "../modules/CommentModule.tsx";


const endpoint = import.meta.env.VITE_API_BASE_URL;
const loadComments = async ():Promise<ICommentModule[]> => {
    return await fetch(endpoint + "/comments").then(res => res.json());
}

export { loadComments };