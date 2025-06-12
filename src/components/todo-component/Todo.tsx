import type {FC} from "react";
import type {TodoModI} from "../../modules/TodoModI.ts";

type PropType = { todo: TodoModI };
export const Todo: FC<PropType> = ({todo: {title, id, completed}}) => {
    return (
        <div>{id} {title} {completed.toString()}</div>
    );
};