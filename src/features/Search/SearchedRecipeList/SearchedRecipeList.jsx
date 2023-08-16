import styles from './SearchedRecipeList.module.scss';
import { useSearchRecipes } from '../useSearchRecipes';
import RecipeList from '../../Recipes/RecipeList/RecipeList';
import Loader from '../../../ui/Loaders/Loader';

import { useSearchParams } from 'react-router-dom';
import RecipesNotFound from '../../../ui/RecipesNotFound/RecipesNotFound';
import LoaderModal from '../../../ui/Loaders/LoaderModal';
import Paginator from '../../../ui/Paginator/Paginator';

function SearchedRecipeList() {
  const { data, isLoading, pages, isFetching, isPreviousData } = useSearchRecipes();
  const [searchParams] = useSearchParams();

  if (!searchParams.get('query')?.length) return;

  return (
    <>
      <div className={styles.wrapper}>
        {isLoading ? (
          <Loader />
        ) : !data?.recipes?.length ? (
          <RecipesNotFound text="Try to looking for something else..." />
        ) : (
          <RecipeList recipes={data.recipes} />
        )}
        {isFetching && isPreviousData ? <LoaderModal /> : null}
      </div>
      <Paginator pages={pages} prevData={isPreviousData} />
    </>
  );
}

export default SearchedRecipeList;
