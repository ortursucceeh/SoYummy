import styles from './RecipeItem.module.scss';
import RecipeNotFound from './../../../assets/recipePreviewNotFound.png';
import { Link } from 'react-router-dom';

// src={RecipeNotFound}
function RecipeItem({ recipe }) {
  return (
    <div className={styles.recipeItem}>
      <Link to={`/recipes/${recipe._id}`}>
        <img src={RecipeNotFound} alt={`${recipe.title} img`} className={styles.recipeImg} />
      </Link>
      <span className={styles.recipeName}>{recipe.title}</span>
    </div>
  );
}

export default RecipeItem;
