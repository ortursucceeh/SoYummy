import Loader from '../../../ui/Loaders/Loader';
import RecipeGallery from '../RecipeGallery/RecipeGallery';
import { useFavoritesRecipes } from '../useFavoritesRecipes';

function FavoriteRecipes() {
  const { data, isLoading } = useFavoritesRecipes();

  if (isLoading) return <Loader />;

  return <RecipeGallery recipes={data.recipes} type="favorite" />;
}

export default FavoriteRecipes;
