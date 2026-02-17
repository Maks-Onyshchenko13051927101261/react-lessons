import type {FC} from "react";
import type {IUserModel} from "../../models/UserModel.tsx";

type UserPropsType = {
    item: IUserModel
}
export const UserComponent: FC<UserPropsType> = ({item: {id, firstName, lastName}}) => {
    return (
        <div>
            {id} {firstName} {lastName}
        </div>
    );
};