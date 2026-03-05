import {LeftBranchComponentAaa} from "./LeftBranchComponentAaa.tsx";
import {useMemo} from "react";

export const LeftBranchComponentAa = () => {
    useMemo(() => {
        console.log("LeftBranchComponentAa");
    }, [])
    return (
        <div>
            left-branch-Aa
            <LeftBranchComponentAaa/>
        </div>
    );
};