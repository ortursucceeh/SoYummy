import styles from './SearchedRecipeList.module.scss';
import { useSearchRecipes } from '../useSearchRecipes';
import RecipeList from '../../Recipes/RecipeList/RecipeList';
import Loader from 'src/ui/Loaders/Loader';
import { useSearchParams } from 'react-router-dom';
import RecipesNotFound from 'src/ui/RecipesNotFound/RecipesNotFound';
import LoaderModal from 'src/ui/Loaders/LoaderModal';
import Paginator from 'src/ui/Paginator/Paginator';
import { getPages } from 'src/utils/functions';

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
