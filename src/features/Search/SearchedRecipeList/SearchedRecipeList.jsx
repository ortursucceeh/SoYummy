import styles from './SearchedRecipeList.module.scss';
import { useSearchRecipes } from '../useSearchRecipes';
import RecipeList from '../../Recipies/RecipeList/RecipeList';
import Loader from '../../../ui/Loaders/Loader';
import searchNotFound from './../../../assets/searchNotFound.png';
import { useSearchParams } from 'react-router-dom';

function SearchedRecipeList() {
  const { data, isLoading } = useSearchRecipes();
  const [searchParams] = useSearchParams();

  if (!searchParams.get('query')) return;

  if (isLoading) return <Loader />;

  if (!data?.recipes?.length)
    return (
      <div className={styles.notFoundWrapper}>
        <img src={searchNotFound} alt="notFoundImage" className={styles.img} />
        <span className={styles.text}>Try to looking for something else...</span>
      </div>
    );

  return (
    <div className={styles.wrapper}>
      <RecipeList recipes={data.recipes} />
    </div>
  );
}

export default SearchedRecipeList;
