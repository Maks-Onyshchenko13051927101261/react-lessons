import {useForm} from "react-hook-form";
import type {IUserModel} from "../../models/IUserModel.tsx";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validator/userValidator.tsx";
import {loginResponse} from "../../services/api.services.tsx";
import {useNavigate} from "react-router";

export const LoginFormComponent = () => {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm<IUserModel>({
        mode: "all",
        resolver: joiResolver(userValidator),
        defaultValues: {
            username: "emilys",
            password: "emilyspass"
        }
    })

    const handlerValid = async (data: IUserModel) => {
        try {
            await loginResponse({...data, expiresInMins: 1});
            if (localStorage.getItem("user")) {
                navigate("resources");
            }
        } catch (error) {
            console.log(error);
            alert("Wrong username or password")
        }
    }

    return (
        <form onSubmit={handleSubmit(handlerValid)}>
            <h5>Enter your login:</h5>
            <label>User name:
                <input type="text" {...register("username")}/>
                <div>{errors.username?.message}</div>
            </label>
            <label>Password:
                <input type="text" {...register("password")}/>
                <div>{errors.password?.message}</div>
            </label>
            <button type="submit">Login</button>
        </form>
    );
};