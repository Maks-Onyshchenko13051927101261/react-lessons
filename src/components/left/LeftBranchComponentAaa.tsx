import {useContext} from "react";
import {MyContext} from "../../context/MyContextProvider.tsx";
import "./leftAaa.css"

export const LeftBranchComponentAaa = () => {
    const {theme} = useContext(MyContext)
    return (
        <div className={theme}>

            <p>This left-branch-Aaa, theme - {theme}</p>
        </div>
    );
};