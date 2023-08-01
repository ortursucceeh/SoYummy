import styles from './RecipeItem.module.scss';
import RecipeNotFound from './../../../assets/recipePreviewNotFound.png';
import { Link } from 'react-router-dom';
import Image from '../../../ui/Image/Image';

// src={RecipeNotFound}
function RecipeItem({ recipe }) {
  return (
    <div className={styles.recipeItem}>
      <Link to={`/recipes/${recipe._id}`}>
        <Image
          // src={recipe.preview}
          alt={`${recipe.title} img`}
          className={styles.recipeImg}
          imageUrl={recipe.preview}
          defaultImage={RecipeNotFound}
        />
      </Link>
      <span className={styles.recipeName}>{recipe.title}</span>
    </div>
  );
}

export default RecipeItem;
