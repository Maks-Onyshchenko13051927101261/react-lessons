import {useContext} from "react";
import {MyContext} from "../../context/MyContextProvider.tsx";

export const RightBranchComponentAaa = () => {
    const {changeTheme} = useContext(MyContext)
    const handlerOnBlack = () => {
        changeTheme("black");
    }
    const handlerOnLight = () => {
        changeTheme("light");
    }
    return (
        <div>
            <p>this is right-branch-Aaa</p>
            <button onClick={handlerOnBlack}>black</button>
            <button onClick={handlerOnLight}>light</button>
        </div>
    );
};