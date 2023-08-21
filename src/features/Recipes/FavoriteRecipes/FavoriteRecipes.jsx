import Loader from 'src/ui/Loaders/Loader';
import LoaderModal from 'src/ui/Loaders/LoaderModal';
import Paginator from 'src/ui/Paginator/Paginator';
import RecipesNotFound from 'src/ui/RecipesNotFound/RecipesNotFound';
import RecipeGallery from '../RecipeGallery/RecipeGallery';
import { useFavoritesRecipes } from './useFavoritesRecipes';
import styles from './FavoriteRecipes.module.scss';

function FavoriteRecipes() {
  const { data, isLoading, pages, isFetching, isPreviousData } = useFavoritesRecipes();

  return (
    <>
      <div className={styles.wrapper}>
        {isLoading ? (
          <Loader />
        ) : !data?.recipes?.length ? (
          <RecipesNotFound text="You don't have favorite recipes yet!" />
        ) : (
          <RecipeGallery recipes={data?.recipes} type="favorite" />
        )}
        {isFetching & isPreviousData ? <LoaderModal /> : null}
      </div>
      <Paginator pages={pages} prevData={isPreviousData} />
    </>
  );
}

export default FavoriteRecipes;
