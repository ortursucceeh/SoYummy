import Loader from '../../../ui/Loaders/Loader';
import LoaderMini from '../../../ui/Loaders/LoaderMini';
import Paginator from '../../../ui/Paginator/Paginator';
import RecipesNotFound from '../../../ui/RecipesNotFound/RecipesNotFound';
import RecipeGallery from '../RecipeGallery/RecipeGallery';
import { useOwnRecipes } from '../useOwnRecipes';

function OwnRecipes() {
  const { data, isLoading, pages, isFetching, isPreviousData } = useOwnRecipes();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : !data?.recipes?.length ? (
        <RecipesNotFound text="You don't have any of your own recipes yet!" />
      ) : (
        <RecipeGallery recipes={data?.recipes} type="own" />
      )}
      <Paginator pages={pages} prevData={isPreviousData} />
      {isFetching ? <LoaderMini color="dark" /> : null}
    </>
  );
}

export default OwnRecipes;
