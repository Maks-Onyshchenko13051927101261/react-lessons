import {RightBranchComponentAa} from "./RightBranchComponentAa.tsx";
import {useMemo} from "react";

export const RightBranchComponentA = () => {
    useMemo(() => {
        console.log("RightBranchComponentA")
    }, []);
    return (
        <div>
            right-branch-A
            <RightBranchComponentAa/>
        </div>
    );
};