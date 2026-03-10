import {UserComponent} from "../user-component/UserComponent.tsx";
import {useAppSelector} from "../../../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.tsx";
import {useEffect} from "react";
import {userActions} from "../../../redux/slices/userSlice/userSlice.tsx";

export const UsersComponent = () => {
    const dispatch = useAppDispatch();
    const {users, isLoading, error} = useAppSelector((state) => state.userStoreSlice);
    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, [dispatch]);
    if (isLoading) return <p>Завантаження...</p>;
    if (error) return <p>Ой! Сталася помилка: {error}</p>;
    return (
        <div>{
            users.map((user) => (<UserComponent user={user} key={user.id}/>))
        }</div>
    );
};