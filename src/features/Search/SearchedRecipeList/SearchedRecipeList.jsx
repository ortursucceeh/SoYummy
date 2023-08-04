import styles from './SearchedRecipeList.module.scss';
import { useSearchRecipes } from '../useSearchRecipes';
import RecipeList from '../../Recipes/RecipeList/RecipeList';
import Loader from '../../../ui/Loaders/Loader';

import { useSearchParams } from 'react-router-dom';
import RecipesNotFound from '../../../ui/RecipesNotFound/RecipesNotFound';

function SearchedRecipeList() {
  const { data, isLoading } = useSearchRecipes();
  const [searchParams] = useSearchParams();

  if (!searchParams.get('query')) return;

  if (isLoading) return <Loader />;

  if (!data?.recipes?.length)
    return <RecipesNotFound text="Try to looking for something else..." />;

  return (
    <div className={styles.wrapper}>
      <RecipeList recipes={data.recipes} />
    </div>
  );
}

export default SearchedRecipeList;
