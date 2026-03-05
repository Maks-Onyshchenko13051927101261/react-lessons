import {type FC, memo} from "react";
import type {IUserModel} from "../../models/IUserModel.tsx";

type UserPropsType = {
    user:IUserModel;
    foo:() => void;

}
// memo запобігає повторному рендерингу компонента, поки його props не змінилися
export const UserComponents:FC<UserPropsType> = memo( ({user:{id, name}}) => {
    console.log("user")
    return (
        <div>{id}: {name}</div>
    );
});