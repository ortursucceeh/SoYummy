import { useRecipe } from '../useRecipe';
import Loader from '../../../ui/Loaders/Loader';
import RecipesNotFound from '../../../ui/RecipesNotFound/RecipesNotFound';
import RecipePageHero from '../RecipePageHero/RecipePageHero';
import RecipeIngredientsList from '../RecipeIngredientsList/RecipeIngredientsList';
import RecipePreparation from '../RecipePreparation/RecipePreparation';

function RecipeDatailsContent() {
  const { recipe, isLoading } = useRecipe();

  if (isLoading) return <Loader />;

  if (!recipe) return <RecipesNotFound text="Can't find your recipe..." />;

  return (
    <div>
      <RecipePageHero
        title={recipe.title}
        description={recipe.description}
        favorite={recipe.favorite}
        time={recipe.time}
        fullImage={recipe.fullImage}
      />
      <RecipeIngredientsList ingredients={recipe.ingredients} />
      <RecipePreparation preparation={recipe.instructions} preview={recipe.previewImg} />
    </div>
  );
}

export default RecipeDatailsContent;
