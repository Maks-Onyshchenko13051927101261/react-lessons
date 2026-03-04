import {RecipeComponent} from "../recipe-component/RecipeComponent.tsx";
import {useLoader} from "../../../services/hookLoader.tsx";
import {getResources} from "../../../services/api.services.tsx";

export const RecipesComponent = () => {
    const {loading, error, data: recipes} = useLoader(getResources.recipes);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Try to login again...</p>;
    return (
        <div>{
            recipes.map(recipe => (<RecipeComponent recipe={recipe} key={recipe.id}/>))
        }</div>
    );
};