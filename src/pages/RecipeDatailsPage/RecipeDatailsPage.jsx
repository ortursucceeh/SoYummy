import RecipeIngredientsList from '../../features/Recipes/RecipeIngredientsList/RecipeIngredientsList';
import RecipePreparation from '../../features/Recipes/RecipePreparation/RecipePreparation';
import { useRecipe } from '../../features/Recipes/useRecipe';
import Loader from '../../ui/Loaders/Loader';
import RecipePageHero from './../../features/Recipes/RecipePageHero/RecipePageHero';
import styles from './RecipeDatailsPage.module.scss';

function RecipeDatailsPage() {
  const { recipe, isLoading } = useRecipe();
  console.log('data', recipe);

  if (isLoading) return <Loader />;

  if (!recipe) return <span>Wrong id</span>;
  return (
    <div className={styles.container}>
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

export default RecipeDatailsPage;
