import "./todos-style.css"
import {useEffect, useState} from "react";
import type {TodoModelI} from "../../../models/TodoModel.ts";
import {loadTodos} from "../../../service/api.service.ts";
import {Todo} from "../todo-component/Todo.tsx";

export const Todos = () => {
    const [todos, SetTodos] = useState<TodoModelI[]>([]);
    useEffect(() => {
        async function fetchTodos() {
            const allTodos = await loadTodos();
            SetTodos(allTodos);
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