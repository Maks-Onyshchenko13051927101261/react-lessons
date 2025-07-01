import "./Todos.css"
import type {ITodoMod} from "../../modules/TodoModI.ts";
import {useEffect, useState} from "react";
import {loadTodos} from "../../service/api.service.ts";
import {Todo} from "../todo-component/Todo.tsx";

export const Todos = () => {
    const [todos, setTodos] = useState<ITodoMod[]>([]);
    useEffect(() => {
        loadTodos().then(value => setTodos(value));
    }, [])
    return (
        <div>
            {
                todos.map(todo => <Todo todo={todo} key={todo.id}/>)
            }
        </div>
    );
};