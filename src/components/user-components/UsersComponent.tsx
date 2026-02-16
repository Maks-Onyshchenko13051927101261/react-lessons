import {useEffect, useState} from "react";
import {allUsers} from "../../service/api.service.ts";
import {UserComponent} from "./UserComponent.tsx";
import type {IUserModel} from "../../models/models-placeholder/UserModel.tsx";
import type {IUserDummy} from "../../models/models-dummy/UsersDummy.tsx";
import {useLocation} from "react-router-dom";

export const UsersComponent = () => {
    const location = useLocation();

    const [users, setUsers] = useState<IUserModel[] | IUserDummy[]>([]);
    useEffect(() => {
        if (location.pathname.includes("jsonplaceholder")) {
            allUsers.placeholder().then(users => setUsers(users));
        } else {
            allUsers.dummy().then(users => setUsers(users))
        }
    }, [location.pathname]);
    return (
        <>{
            users.map((user) => <UserComponent key={user.id} item={user}/>)
        }</>
    );
};