import {RightBranchComponentAaa} from "./RightBranchComponentAaa.tsx";
import {useMemo} from "react";

export const RightBranchComponentAa = () => {
    useMemo(() => {
        console.log("RightBranchComponentAa");
    }, []);
    return (
        <div>
            right-branch-Aa
            <RightBranchComponentAaa/>
        </div>
    );
};