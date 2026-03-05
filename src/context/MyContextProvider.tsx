import {createContext} from "react";

type ContextTypeProps = {
    theme: string,
    changeTheme: (theme: string) => void,
}
const defaultValue: ContextTypeProps = {
    theme: "light",
    changeTheme: (theme: string) => {
        console.log(theme);
    }
}
export const MyContext = createContext<ContextTypeProps>(defaultValue);