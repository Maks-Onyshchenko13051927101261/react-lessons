import {useFetch} from "../../hooks/useFetch.tsx";
import {endpoint} from "../../services/api.services.tsx";
import {UserComponents} from "../user-components/UserComponents.tsx";
import {useCallback, useMemo} from "react";

export const UsersComponents = () => {
    const {loader, error, isLoading} = useFetch(endpoint.users);
    // useCallback запобігає повторному рендерингу компонента UserComponent, поки його props не змінилися
    const foo = useCallback(() => {
        console.log("Loading user");
    }, []);
    // Запам'ятовує результат обчислень та повертає його без повторного виконання циклу .map(),
    // поки не зміняться залежності
    const renderUsers = useMemo(() => {
        if (!loader) return [];
        console.log("memoized")
        return loader.map(user => (<UserComponents user={user} key={user.id} foo={foo}/>))
    }, [loader, foo])
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    console.log("users");
    return (
        <div>{renderUsers}</div>
    );
};