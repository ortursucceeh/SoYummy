import Loader from '../../../ui/Loaders/Loader';
import RecipesNotFound from '../../../ui/RecipesNotFound/RecipesNotFound';
import RecipeGallery from '../RecipeGallery/RecipeGallery';
import { useOwnRecipes } from '../useOwnRecipes';

function OwnRecipes() {
  const { data, isLoading } = useOwnRecipes();

  if (isLoading) return <Loader />;

  if (!data.recipes.length)
    return <RecipesNotFound text="You don't have any of your own recipes yet!" />;

  return <RecipeGallery recipes={data.recipes} type="own" />;
}

export default OwnRecipes;
