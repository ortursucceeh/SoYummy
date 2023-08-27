import Loader from 'src/ui/Loaders/Loader';
import LoaderModal from 'src/ui/Loaders/LoaderModal';
import Paginator from 'src/ui/Paginator/Paginator';
import RecipesNotFound from 'src/ui/RecipesNotFound/RecipesNotFound';
import RecipeGallery from '../RecipeGallery/RecipeGallery';
import { useMyRecipes } from './useMyRecipes';
import styles from './MyRecipes.module.scss';

const MyRecipes = () => {
  const { data, isLoading, pages, isFetching, isPreviousData } = useMyRecipes();

  return (
    <>
      <div className={styles.wrapper}>
        {isLoading ? (
          <Loader />
        ) : !data?.recipes?.length ? (
          <RecipesNotFound text="You don't have any of your own recipes yet!" />
        ) : (
          <RecipeGallery recipes={data?.recipes} type="own" />
        )}
        {isFetching && isPreviousData ? <LoaderModal /> : null}
      </div>
      <Paginator pages={pages} prevData={isPreviousData} />
    </>
  );
};

export default MyRecipes;
