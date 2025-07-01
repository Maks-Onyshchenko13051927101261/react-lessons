import type {FC} from "react";
import type {ITodoMod} from "../../modules/TodoModI.ts";

type PropType = { todo: ITodoMod };
export const Todo: FC<PropType> = ({todo: {title, id, completed}}) => {
    return (
        <div>{id} {title} {completed.toString()}</div>
    );
};