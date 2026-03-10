import {type FC, memo} from "react";
import type {IUserModel} from "../../../models/IUserModel.tsx";

type UserPropsType = {
    user: IUserModel,
}
export const UserComponent: FC<UserPropsType> = memo(({user: {id, name}}) => {
    return (
        <div>{id}: {name}</div>
    );
});