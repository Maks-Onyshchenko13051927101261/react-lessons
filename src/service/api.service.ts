import type {ITodoMod} from "../modules/TodoModI.ts";

const endpoint = import.meta.env.VITE_API_BASE_URL;

const loadTodos = async ():Promise<ITodoMod[]> => {
    return await fetch(endpoint + '/todos').then((res) => res.json());
}

export { loadTodos };