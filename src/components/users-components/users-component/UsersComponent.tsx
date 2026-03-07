import {UserComponent} from "../user-component/UserComponent.tsx";
import {useFetch} from "../../../hooks/useFetch.tsx";
import {endpoint} from "../../../services/api.services.tsx";

export const UsersComponent = () => {
    const {item: users, error, loading} = useFetch(endpoint.users);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>...Error</p>;
    return (
        <div>{
            users.map((user) => (<UserComponent user={user} key={user.id}/>))
        }</div>
    );
};