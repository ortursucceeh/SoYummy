import RecipeGalleryItem from '../RecipeGalleryItem/RecipeGalleryItem';
import styles from './RecipeGallery.module.scss';

function RecipeGallery({ recipes, interface }) {
  return (
    <div className={styles.wrapper}>
      {recipes.map(recipe => (
        <RecipeGalleryItem recipe={recipe} type={type} key={recipe._id} />
      ))}
    </div>
  );
}

export default RecipeGallery;
