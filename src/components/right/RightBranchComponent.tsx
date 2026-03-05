import {RightBranchComponentA} from "./RightBranchComponentA.tsx";
import {useMemo} from "react";

export const RightBranchComponent = () => {
    useMemo(() => {
        console.log("RightBranchComponent");
    }, []);
    return (
        <div>
            right-branch
            <RightBranchComponentA/>
        </div>
    );
};