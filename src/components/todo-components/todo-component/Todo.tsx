import "./todo-style.css"
import type {TodoModelI} from "../../../models/TodoModel.ts";
import type {FC} from "react";

type PropTodo = {
    todo: TodoModelI
}
export const Todo:FC<PropTodo> = ({todo:{id, todo}}) => {
    return (
        <div className={"element"}>
            <h3>{id} {todo}</h3>
        </div>
    );
};