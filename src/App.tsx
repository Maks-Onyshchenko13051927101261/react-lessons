import './App.css'
import {Outlet} from "react-router-dom";
import {MenuComponent} from "./components/menu-component/MenuComponent.tsx";

function App() {
    return (
        <>
            <MenuComponent/>
            This Home Page App
            <hr/>
            <Outlet/>
        </>
    )
}

export default App
