import Loader from '../../../ui/Loaders/Loader';
import RecipesNotFound from '../../../ui/RecipesNotFound/RecipesNotFound';
import RecipeGallery from '../RecipeGallery/RecipeGallery';
import { useFavoritesRecipes } from '../useFavoritesRecipes';

function FavoriteRecipes() {
  const { data, isLoading } = useFavoritesRecipes();

  if (isLoading) return <Loader />;

  if (!data.recipes.length) return <RecipesNotFound text="You don't have favorite recipes yet!" />;

  return <RecipeGallery recipes={data.recipes} type="favorite" />;
}

export default FavoriteRecipes;
