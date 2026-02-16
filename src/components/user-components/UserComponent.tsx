import type {FC} from "react";
import type {IUserModel} from "../../models/models-placeholder/UserModel.tsx";
import type {IUserDummy} from "../../models/models-dummy/UsersDummy.tsx";
import {Link} from "react-router-dom";


type UserPropsType = {
    item: IUserModel | IUserDummy
}
export const UserComponent: FC<UserPropsType> = ({item}) => {
    return (
        <ul>
            <li><Link to="jsonplaceholder" state={item}>placeholder</Link></li>
        </ul>
    );
};