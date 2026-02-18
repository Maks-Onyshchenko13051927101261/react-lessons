import type {FC} from "react";
import type {IUserModel} from "../../../models/UserModel.tsx";
import {useNavigate} from "react-router-dom";

type UserPropsType = {
    item: IUserModel
}
export const UserComponent: FC<UserPropsType> = ({item: {id, firstName, lastName, email}}) => {
    const navigation = useNavigate();
    const clickMeNavigate = () => {
        navigation("/users/" + id + "/carts")
    }
    return (
        <div>
            <h5>{firstName} {lastName}</h5>
            <p>{email}</p>
            <button onClick={clickMeNavigate}>click me</button>
        </div>
    );
};