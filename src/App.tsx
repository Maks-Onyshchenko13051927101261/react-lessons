import './App.css'
import {MenuComponent} from "./components/menu-component/MenuComponent.tsx";
import {Outlet} from "react-router-dom";

function App() {
    return (
        <div>
            <MenuComponent/>
            <hr/>
            <Outlet/>
        </div>
    )
}

export default App
