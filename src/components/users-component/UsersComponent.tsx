import {useEffect, useState} from "react";
import {usersServices} from "../../services/api.services.tsx";
import type {IUserModel} from "../../models/UserModel.tsx";
import {UserComponent} from "../user-component/UserComponent.tsx";
import {useSearchParams} from "react-router-dom";

export const UsersComponent = () => {
    const [searchParams] = useSearchParams({page: "1"})
    const [users, setUsers] = useState<IUserModel[]>([]);
    const currentPage = searchParams.get("page") || "1";
    useEffect(() => {
        usersServices.getAllUsers(currentPage)
            .then(({users}) => setUsers(users))
    }, [currentPage])
    return (
        <ul>{
            users.map(user => (<UserComponent user={user} key={user.id}/>))
        }</ul>
    );
};