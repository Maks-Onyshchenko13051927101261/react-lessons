import {LeftBranchComponentA} from "./LeftBranchComponentA.tsx";
import {useMemo} from "react";

export const LeftBranchComponent = () => {
    useMemo(() => {
        console.log("LeftBranchComponent");
    }, [])
    return (
        <div>
            Left-branch
            <LeftBranchComponentA/>
        </div>
    );
};