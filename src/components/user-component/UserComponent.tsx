import type {FC} from "react";
import type {IUserModel} from "../../models/UserModel.tsx";

type UserPropsType = {
    user: IUserModel;
}
export const UserComponent: FC<UserPropsType> = ({user: {id, firstName, lastName}}) => {
    return (
        <li>{id} {firstName} {lastName}</li>
    );
};