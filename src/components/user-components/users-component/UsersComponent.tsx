import {useEffect, useState} from "react";
import type {IUserModel} from "../../../models/UserModel.tsx";
import {usersServices} from "../../../services/api.service.tsx";
import {UserComponent} from "../user-component/UserComponent.tsx";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUserModel[]>([]);
    useEffect(() => {
        usersServices.allUsers().then(({users}) => setUsers(users));
    },[])
    return (
        <div>
            {users.map(user => <UserComponent item={user} key={user.id}/>)}
        </div>
    );
};