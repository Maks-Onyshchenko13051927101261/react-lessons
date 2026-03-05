import './App.css'
import {MyContext} from "./context/MyContextProvider.tsx";
import {useState} from "react";
import {LeftBranchComponent} from "./components/left/LeftBranchComponent.tsx";
import {RightBranchComponent} from "./components/right/RightBranchComponent.tsx";

function App() {
    const [themeColor, setThemeColor] = useState<string>("light");
    return (
        <div className={themeColor}>
            <MyContext.Provider value={{
                theme: themeColor,
                changeTheme: (theme) => {
                    setThemeColor(theme)
                }
            }}>
                <LeftBranchComponent/>
                <RightBranchComponent/>
            </MyContext.Provider>
        </div>
    )
}

export default App
