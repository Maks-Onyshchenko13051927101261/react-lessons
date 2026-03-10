import {store} from "../store/store.tsx";
import {useSelector} from "react-redux";

export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();