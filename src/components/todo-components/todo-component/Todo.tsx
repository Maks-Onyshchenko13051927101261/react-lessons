import "./todo-style.css"
import type {ITodoModel} from "../../../models/TodoModel.ts";
import type {FC} from "react";

type PropTodo = {
    todo: ITodoModel
}
export const Todo:FC<PropTodo> = ({todo:{id, todo}}) => {
    return (
        <div className={"element"}>
            <h3>{id} {todo}</h3>
        </div>
    );
};