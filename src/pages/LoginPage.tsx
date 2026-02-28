import {LoginFormComponent} from "../components/login-form-component/LoginFormComponent.tsx";
import {LoginAuthComponent} from "../components/login-auth-component/LoginAuthComponent.tsx";

export const LoginPage = () => {
    return (
        <>
            <LoginFormComponent/>
            <hr/>
            <LoginAuthComponent/>
        </>
    );
};