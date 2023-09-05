import { useSearchParams } from 'react-router-dom';
import Loader from 'src/ui/Loaders/Loader';
import LoaderModal from 'src/ui/Loaders/LoaderModal';
import Paginator from 'src/ui/Paginator/Paginator';
import RecipesNotFound from 'src/ui/RecipesNotFound/RecipesNotFound';
import { getPages } from 'src/utils/functions';
import RecipeList from '../../Recipes/RecipeList/RecipeList';
import styles from './SearchedRecipeList.module.scss';
import { useSearchRecipes } from './useSearchRecipes';

const SearchedRecipeList = () => {
  const { data, isLoading, isFetching, isPreviousData } = useSearchRecipes();
  const [searchParams] = useSearchParams();

  if (!searchParams.get('query')?.length) return;

  if (isLoading) return <Loader />;

  if (!data?.recipes?.length)
    return <RecipesNotFound text="Try to looking for something else..." />;

  const pages = getPages(data?.total, data?.limit);

  return (
    <>
      <div className={styles.wrapper}>
        <RecipeList recipes={data.recipes} />
        {isFetching && isPreviousData && <LoaderModal />}
      </div>
      <Paginator pages={pages} prevData={isPreviousData} />
    </>
  );
};

export default SearchedRecipeList;
