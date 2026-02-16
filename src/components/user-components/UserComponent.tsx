import type {FC} from "react";
import type {IUserModel} from "../../models/models-placeholder/UserModel.tsx";
import type {IUserDummy} from "../../models/models-dummy/UsersDummy.tsx";


type UserPropsType = {
    item: IUserModel | IUserDummy
}
export const UserComponent: FC<UserPropsType> = ({item:{id, username, email}}) => {
    return (
        <div>{id} {username} {email}</div>
    );
};