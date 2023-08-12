import { useRecipe } from '../useRecipe';
import Loader from '../../../ui/Loaders/Loader';
import RecipesNotFound from '../../../ui/RecipesNotFound/RecipesNotFound';
import RecipePageHero from './RecipePageHero/RecipePageHero';
import RecipeIngredientsList from './RecipeIngredientsList/RecipeIngredientsList';
import RecipePreparation from './RecipePreparation/RecipePreparation';

function RecipeDatailsContent() {
  const { recipe, isLoading } = useRecipe();

  if (isLoading) return <Loader />;

  if (!recipe) return <RecipesNotFound text="Can't find your recipe..." />;

  return (
    <div>
      <RecipePageHero
        _id={recipe._id}
        title={recipe.title}
        description={recipe.description}
        favorites={recipe.favorites}
        time={recipe.time}
        fullImage={recipe.fullImage}
      />
      <RecipeIngredientsList ingredients={recipe.ingredients} />
      <RecipePreparation preparation={recipe.instructions} preview={recipe.preview} />
    </div>
  );
}

export default RecipeDatailsContent;
