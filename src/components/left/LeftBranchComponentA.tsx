import {LeftBranchComponentAa} from "./LeftBranchComponentAa.tsx";
import {useMemo} from "react";

export const LeftBranchComponentA = () => {
    useMemo(() => {
        console.log('LeftBranchComponentA');
    }, [])
    return (
        <div>
            left-branch-A
            <LeftBranchComponentAa/>
        </div>
    );
};