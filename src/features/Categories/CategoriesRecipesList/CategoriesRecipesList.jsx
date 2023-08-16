import Loader from '../../../ui/Loaders/Loader';
import LoaderModal from '../../../ui/Loaders/LoaderModal';
import Paginator from '../../../ui/Paginator/Paginator';
import RecipesNotFound from '../../../ui/RecipesNotFound/RecipesNotFound';
import RecipeList from '../../Recipes/RecipeList/RecipeList';
import styles from './CategoriesRecipesList.module.scss';
import { useCategoryRecipes } from './useCategoryRecipes';

function CategoriesRecipesList() {
  const { data, isLoading, isFetching, isPreviousData, pages } = useCategoryRecipes();

  return (
    <>
      <div className={styles.wrapper}>
        {isLoading ? (
          <Loader />
        ) : !data?.recipes?.length ? (
          <RecipesNotFound text="Try to choose another category..." />
        ) : (
          <RecipeList recipes={data.recipes} />
        )}
        {isFetching ? <LoaderModal /> : null}
      </div>
      <Paginator pages={pages} prevData={isPreviousData} />
    </>
  );
}

export default CategoriesRecipesList;
