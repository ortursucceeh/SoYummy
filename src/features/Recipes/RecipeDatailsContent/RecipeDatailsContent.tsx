import Loader from 'src/ui/Loaders/Loader';
import RecipesNotFound from 'src/ui/RecipesNotFound/RecipesNotFound';
import RecipeIngredientsList from './RecipeIngredientsList/RecipeIngredientsList';
import RecipePageHero from './RecipePageHero/RecipePageHero';
import RecipePreparation from './RecipePreparation/RecipePreparation';
import { useRecipe } from './useRecipe';

const RecipeDatailsContent = () => {
  const { recipe, isLoading } = useRecipe();

  if (isLoading) return <Loader />;

  if (!recipe) return <RecipesNotFound text="Can't find your recipe..." />;

  return (
    <div>
      <RecipePageHero
        _id={recipe._id}
        title={recipe.title}
        description={recipe.description}
        // @ts-ignore
        favorites={recipe?.favorites}
        time={recipe.time}
      />
      <RecipeIngredientsList ingredients={recipe.ingredients} />
      <RecipePreparation preparation={recipe.instructions} preview={recipe.preview} />
    </div>
  );
};

export default RecipeDatailsContent;
