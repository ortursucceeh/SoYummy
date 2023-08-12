import Loader from '../../../ui/Loaders/Loader';
import RecipeGallery from '../RecipeGallery/RecipeGallery';
import { useOwnRecipes } from '../useOwnRecipes';

function OwnRecipes() {
  const { data, isLoading } = useOwnRecipes();

  if (isLoading) return <Loader />;

  return <RecipeGallery recipes={data.recipes} type="own" />;
}

export default OwnRecipes;
