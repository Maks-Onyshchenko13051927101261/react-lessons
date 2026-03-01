import {LoginFormComponent} from "../components/login-form-component/LoginFormComponent.tsx";
import {Outlet} from "react-router";

export const LoginPage = () => {
    return (
        <>
            <LoginFormComponent/>
            <hr/>
            <Outlet/>
        </>
    );
};