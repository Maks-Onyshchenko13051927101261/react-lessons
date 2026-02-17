import {UserComponent} from "./UserComponent.tsx";
import {useEffect, useState} from "react";
import {apiServices} from "../../services/api.service.ts";
import type {IUserModel} from "../../models/UserModel.tsx";

export const UsersComponents = () => {
    const [users, setUsers] = useState<IUserModel[]>([]);
    useEffect(() => {
        apiServices.allUsers().then(users => setUsers(users))
    }, [])
    return (
        <>{
            users.map(user => <UserComponent item={user} key={user.id}/>)
        }</>
    );
};