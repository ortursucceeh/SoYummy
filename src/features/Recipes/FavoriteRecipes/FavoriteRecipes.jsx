import Loader from '../../../ui/Loaders/Loader';
import LoaderMini from '../../../ui/Loaders/LoaderMini';
import Paginator from '../../../ui/Paginator/Paginator';
import RecipesNotFound from '../../../ui/RecipesNotFound/RecipesNotFound';
import RecipeGallery from '../RecipeGallery/RecipeGallery';
import { useFavoritesRecipes } from '../useFavoritesRecipes';
function FavoriteRecipes() {
  const { data, isLoading, pages, isFetching, isPreviousData } = useFavoritesRecipes();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : !data?.recipes?.length ? (
        <RecipesNotFound text="You don't have favorite recipes yet!" />
      ) : (
        <RecipeGallery recipes={data?.recipes} type="favorite" />
      )}
      <Paginator pages={pages} prevData={isPreviousData} />
      {isFetching ? <LoaderMini color="dark" /> : null}
    </>
  );
}

export default FavoriteRecipes;
