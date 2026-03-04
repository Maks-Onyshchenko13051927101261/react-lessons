import type {FC} from "react";
import type {IRecipeModel} from "../../../models/IRecipeModel.tsx";

type RecipePropsType = {
    recipe: IRecipeModel
}
export const RecipeComponent: FC<RecipePropsType> = ({recipe: {id, name}}) => {
    return (
        <div className={"item"}>
            <h5>{id} {name}</h5>
        </div>
    );
};