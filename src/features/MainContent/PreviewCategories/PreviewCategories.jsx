import { Link, useNavigate } from 'react-router-dom';
import styles from './PreviewCategories.module.scss';
import Button from '../../../ui/Button/Button';
import RecipeList from '../../Recipies/RecipeList/RecipeList';
import { useRecipesCountFromScreenSize } from '../../../hooks/useRecipesCountFromScreenSize';
import { usePreviewCategories } from '../usePreviewCategories';
import Loader from '../../../ui/Loaders/Loader';

function PreviewCategories() {
  const { categories, isLoading } = usePreviewCategories();
  const recipesCount = useRecipesCountFromScreenSize();
  const navigate = useNavigate();

  if (isLoading) return <Loader />;

  if (!categories)
    return <span className={styles.error}>Error occured loading categories....</span>;

  return (
    <section className={styles.categoriesWrapper}>
      {Object.entries(categories).map(([categoryName, recipes]) => {
        return (
          <div className={styles.category} key={categoryName}>
            <h3 className={styles.categoryName}>
              {categoryName.slice(0, 1).toUpperCase() + categoryName.slice(1)}
            </h3>
            <RecipeList recipes={recipes.slice(0, recipesCount)} />

            <button
              className={styles.categoryButton}
              onClick={() => navigate(`/categories/${categoryName}`)}
            >
              See all
            </button>
          </div>
        );
      })}

      <Button
        shape="curv"
        color="trans"
        className={styles.otherBtn}
        onClick={() => navigate('/categories')}
      >
        Other categories
      </Button>
    </section>
  );
}

export default PreviewCategories;
