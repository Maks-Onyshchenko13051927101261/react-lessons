import "./todos-style.css"
import {useEffect, useState} from "react";
import type {ITodoModel} from "../../../models/TodoModel.ts";
import {loadTodos} from "../../../service/api.service.ts";
import {Todo} from "../todo-component/Todo.tsx";

export const Todos = () => {
    const [todos, setTodos] = useState<ITodoModel[]>([]);
    useEffect(() => {
        async function fetchTodos() {
            const allTodos = await loadTodos();
            setTodos(allTodos);
        }

        fetchTodos();
    })
    return (
        <div className={"container"}>
            {
                todos.map(todo => <Todo todo={todo} key={todo.id}/>)
            }
        </div>
    );
};