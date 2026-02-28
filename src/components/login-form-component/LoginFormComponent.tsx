import {useForm} from "react-hook-form";
import type {IUserModel} from "../../models/IUserModel.tsx";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validator/userValidator.tsx";

export const LoginFormComponent = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<IUserModel>({
        mode: "all",
        resolver: joiResolver(userValidator),
        defaultValues:{
            username:"emilys",
            password:"emilyspass"
        }
    })

    const handlerValid = (data:IUserModel) => {
        console.log(data)
    }

    return (
        <form onClick={handleSubmit(handlerValid)}>
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