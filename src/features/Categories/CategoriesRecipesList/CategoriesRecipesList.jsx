import Loader from '../../../ui/Loaders/Loader';
import RecipesNotFound from '../../../ui/RecipesNotFound/RecipesNotFound';
import RecipeList from '../../Recipies/RecipeList/RecipeList';
import styles from './CategoriesRecipesList.module.scss';
import { useCategoryRecipes } from './useCategoryRecipes';

function CategoriesRecipesList() {
  const { data, isLoading } = useCategoryRecipes();

  if (isLoading) return <Loader />;

  if (!data?.recipes?.length) return <RecipesNotFound text="Try to choose another category..." />;

  return (
    <div className={styles.wrapper}>
      <RecipeList recipes={data.recipes} />
    </div>
  );
}

export default CategoriesRecipesList;
