import {RecipeComponent} from "../recipe-component/RecipeComponent.tsx";
import {getResources} from "../../../services/api.services.tsx";
import {useFetch} from "../../../services/fetchHook.tsx";

export const RecipesComponent = () => {
    const {loading, error, data: recipes} = useFetch(getResources.recipes);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Try to login again...</p>;
    return (
        <div className={"container"}>{
            recipes.map(recipe => (<RecipeComponent recipe={recipe} key={recipe.id}/>))
        }</div>
    );
};