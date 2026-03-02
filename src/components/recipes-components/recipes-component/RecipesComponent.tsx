import {useEffect, useState} from "react";
import {getResources, login} from "../../../services/api.services.tsx";
import {RecipeComponent} from "../recipe-component/RecipeComponent.tsx";
import type {IRecipeModel} from "../../../models/IRecipeModel.tsx";

export const RecipesComponent = () => {
    const [recipes, setRecipes] = useState<IRecipeModel[]>([]);
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                setRecipes(await getResources.recipes());
            }
            catch (e) {
                const error = e as {response?: {status: number}};
                if(error.response?.status === 401){
                    try{
                        await login.refresh();
                        setRecipes(await getResources.recipes());
                    } catch (refreshError) {
                        console.log(refreshError);
                    }
                } else {console.error("something went wrong (not 401):", e)}
            }
        }
        void fetchRecipes();
    }, [])
    return (
        <div>{
            recipes.map(recipe => (<RecipeComponent recipe={recipe} key={recipe.id}/>))
        }</div>
    );
};