import {useEffect, useState} from "react";
import {allUsers} from "../../service/api.service.ts";
import {UserComponent} from "./UserComponent.tsx";
import type {IUserModel} from "../../models/models-placeholder/UserModel.tsx";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUserModel[]>([]);
    useEffect(() => {
        allUsers.placeholder().then(users => setUsers(users));
    }, [])
    return (
        <>{
            users.map((user) => <UserComponent key={user.id} item={user}/>)
        }</>
    );
};