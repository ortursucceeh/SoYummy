import RecipesNotFound from '../../../ui/RecipesNotFound/RecipesNotFound';
import RecipeGalleryItem from '../RecipeGalleryItem/RecipeGalleryItem';
import styles from './RecipeGallery.module.scss';

function RecipeGallery({ recipes, type }) {
  // if (!recipes.length) return <RecipesNotFound text="You don't have any recipes yet..." />;
  return (
    <div className={styles.wrapper}>
      {recipes.map(recipe => (
        <RecipeGalleryItem recipe={recipe} type={type} key={recipe._id} />
      ))}
    </div>
  );
}

export default RecipeGallery;
